import {
  createUserRepo,
  getUserByEmailRepo,
  getUserByUsernameRepo
} from "../repositories/userRepository.ts"
import config from "../config/config.ts";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

import type { CreateUserDTO, LoginUserDTO } from "../utils/types/userDTO.ts";

export const createUserService = async (data: CreateUserDTO) => {

  const emailExists = await getUserByEmailRepo(data.email);
  if (emailExists) {
    throw new Error("Email já está em uso");
  }

  const usernameExists = await getUserByUsernameRepo(data.username);
  if (usernameExists) {
    throw new Error("Username já está em uso");
  }

  const passwordHash = await bcrypt.hash(data.password, 10);

  const user = await createUserRepo({
    username: data.username,
    email: data.email,
    passwordHash
  });
  console.log(`Usuario com id ${user.id}, email ${user.email} e username ${user.username} Criado!`)
  return user;
};


export const loginUserService = async (data: LoginUserDTO) => {
  const user = await getUserByEmailRepo(data.email)
  const isPasswordvalid = user ?  await bcrypt.compare(data.password, user.passwordHash): false;
  if(!isPasswordvalid || !user){
    throw new Error("Email or password wrong")
  }
  const payload = {id: user.id, username: user.username, email: user.email}

  const token = jwt.sign(payload, config.JWT_KEY!)

  console.log(`Usuario com id ${user.id} Logou!`)

  return { user: { id: user.id, username: user.username, email: user.email }, token };
}
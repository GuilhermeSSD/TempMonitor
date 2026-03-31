import {
  createUserRepo,
  getUserByEmailRepo,
  getUserByUsernameRepo
} from "../repositories/userRepository"
import bcrypt from "bcrypt"

import { CreateUserDTO } from "../utils/types/userDTO";

export const createUserService = async (data: CreateUserDTO) => {

  const emailExists = await getUserByEmailRepo(data.email);
  if (emailExists) {
    throw new Error("Email já está em uso");
  }

  const usernameExists = await getUserByUsernameRepo(data.username);
  if (usernameExists) {
    throw new Error("Username já está em uso");
  }

  const passwordHash = await bcrypt.hash(data.passwordHash, 10)

  const user = await createUserRepo({
    username: data.username,
    email: data.email,
    passwordHash
  });

  return user;
};
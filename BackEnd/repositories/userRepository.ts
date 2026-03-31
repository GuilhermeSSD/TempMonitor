import User from "../models/userModel";
import { CreateUserDTO } from "../utils/types/userDTO";
export const createUserRepo = (data : CreateUserDTO) => User.create(data);
export const getUserByIdRepo = (id : number) =>User.findByPk(id)
export const getUserByEmailRepo = (email : string) => User.findOne({where : { email: email}})
export const getUserByUsernameRepo = (username : string) => User.findOne({where: {username: username}})

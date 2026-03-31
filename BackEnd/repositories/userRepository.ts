// repository/userRepo.ts
import User from "../models/userModel.ts";
import type { UserAttributes } from "../models/userModel.ts";

export const createUserRepo = (userData: UserAttributes) => User.create(userData);
export const getUserByIdRepo = (id: number) => User.findByPk(id);
export const getUserByEmailRepo = (email: string) => User.findOne({ where: { email } });
export const getUserByUsernameRepo = (username: string) => User.findOne({ where: { username } });
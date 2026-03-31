import { Request, Response } from "express";
import { createUserService } from "../services/UserServices";
import { CreateUserDTO } from "../utils/types/userDTO";

export const createUserController = async (req: Request, res: Response) => {
  try {
    const { username, email, passwordHash } = req.body as CreateUserDTO;

    const user = await createUserService({
      username,
      email,
      passwordHash
    });

    return res.status(201).json(user);

  } catch (error: any) {
    return res.status(400).json({
      error: error.message
    });
  }
};
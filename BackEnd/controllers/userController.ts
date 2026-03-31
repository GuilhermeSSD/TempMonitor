import type { Request, Response } from "express";
import { createUserService } from "../services/UserServices.ts";
import type { CreateUserDTO } from "../utils/types/userDTO.ts"
import type { LoginUserDTO } from "../utils/types/userDTO.ts";

export const createUserController = async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body as CreateUserDTO;

    if (!username || !email || !password) {
      return res.status(400).json({ error: "All spaces must be filled" });
    }

    const user = await createUserService({ username, email, password });

    const { passwordHash, ...userWithoutPassword } = user.toJSON();

    return res.status(201).json(userWithoutPassword);

  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
};


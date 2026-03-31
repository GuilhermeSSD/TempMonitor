import { Router } from "express";
import { createUserController } from "../controllers/userController.ts";

const userRoutes = Router();

userRoutes.post("/users", createUserController);

export default userRoutes;
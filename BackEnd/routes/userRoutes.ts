import { Router } from "express";
import { createUserController, loginUserController } from "../controllers/userController.ts";

const userRoutes = Router();

userRoutes.post("/users", createUserController);
userRoutes.post("/login", loginUserController);

export default userRoutes;
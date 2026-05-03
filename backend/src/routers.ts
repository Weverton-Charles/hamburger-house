import { Router } from "express";
import { login, register } from "./controller/user-contollers.js";

export const router = Router();

// User Routers
router.post("/login", login);
router.post("/register", register);

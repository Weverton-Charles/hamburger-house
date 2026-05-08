import type { Request, Response } from "express";
import { prisma } from "../db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { userInfo } from "os";

// login route

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({ message: "Email and password are required" });
      return;
    }

    const user = await prisma.user.findFirst({
      where: { email },
    });

    if (!user) {
      res.status(401).json({ message: "Invalid credentials" });
      return;
    }

    const match = await bcrypt.compare(password, user?.password);

    if (!match) {
      res.status(401).json({ message: "Invalid credentials" });
      return;
    }
    const userInfos = {
      id: user.id,
      name: user.name,
      email: user.email,
      cep: user.cep,
    };

    if (!process.env.JWT_SECRET) {
      return;
    }
    const token = jwt.sign(userInfos, process.env.JWT_SECRET);
    console.log(token);
    res.cookie("user", token, {
      maxAge: 30 * 1000,
    });

    res.status(200).json(userInfos);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// registration route

export const register = async (req: Request, res: Response) => {
  try {
    const { name, email, password, cep } = req.body;

    if (!name || !email || !password || !cep) {
      res.status(400).json({ message: "All fields are required" });
      return;
    }

    const hash = await bcrypt.hash(password, 10);

    const user = await prisma.user.findFirst({
      where: { email },
    });

    if (user?.email) {
      res
        .status(409)
        .json({ message: "This email address is already registered" });
      return;
    }

    const newUser = await prisma.user.create({
      data: { name: name, email: email, password: hash, cep: cep },
    });

    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
    return;
  }
};

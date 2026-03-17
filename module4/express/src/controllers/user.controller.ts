import { Request, Response } from "express";
import { getUserById, getUsers, createUser } from "../services/user.service.js";

export const getUsersData = (req: Request, res: Response) => {

    const  users  = getUsers();

  res.json([users]);
};

export const getUserDataById = (req: Request, res: Response) => {

  const {id} = req.params;
  const user = getUserById(id);

  res.json([user]);
}

export const createUserData = (req: Request, res: Response) => {

  const user = createUser(req.body);

  res.status(201).json(user);
};

import { get } from "node:http";
import {getUserDataById, getUsersData, createUserData} from "../repositories/user.repository.js"

export const getUsers = () => {

    const  users  = getUsersData();

    const response = {
        status: "success",
        message: "List of users",
        data: [users],
        statusCode: 200,
        error: null
    };


  return response;
};

export const getUserById = (id: any) => {

  const user = getUserDataById(id);

  const response = {
        status: "success",
        message: "User data",
        data: [user],
        statusCode: 200,
        error: null
    };

  return response;
}

export const createUser = (user: any) => {

  const resp = createUserData(user);

  const response = {
        status: "success",
        message: "User created successfully",
        data: [resp],
        statusCode: 201,
        error: null
    };

  return response;
}


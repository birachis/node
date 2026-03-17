import { Router } from "express";
import { getUserDataById, getUsersData, createUserData } from "../controllers/user.controller.js";

const router = Router();

router.get("/", getUsersData);
router.get("/:id", getUserDataById);
router.post("/", createUserData);

export default router;

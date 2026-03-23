import { Router } from "express";
import { getBooksData, getBookDataById, createBookData, updateBookData, deleteBookData } from "../controllers/book.controller.js";
import { validate  } from "../middlewares/validate.js";
import { createBookSchema, updateBookSchema } from "../schemas/book.schema.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/:id", authMiddleware, getBookDataById);
router.get("/", authMiddleware, getBooksData);
router.post("/", validate(createBookSchema), authMiddleware, createBookData);
router.put("/:id", validate(updateBookSchema), authMiddleware, updateBookData);
router.delete("/:id", authMiddleware, deleteBookData);

export default router;

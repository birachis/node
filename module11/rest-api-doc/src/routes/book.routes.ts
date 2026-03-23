import { Router } from "express";
import { getBooksData, getBookDataById, createBookData, updateBookData, deleteBookData } from "../controllers/book.controller.js";
import { validate  } from "../middlewares/validate.js";
import { createBookSchema, updateBookSchema } from "../schemas/book.schema.js";

const router = Router();

/**
 * @openapi
 * /book:
 *   get:
 *     summary: Get all books
 *     description: Returns a list of all books
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             example:
 *               - id: "101"
 *                 name: "Laptop"
 *                 isInStore: true
 *                 amountInStore: 7
 *               - id: "102"
 *                 name: "Mouse"
 *                 isInStore: true
 *                 amountInStore: 30
 */


router.get("/:id", getBookDataById);
router.get("/", getBooksData);
router.post("/", validate(createBookSchema), createBookData);
router.put("/:id", validate(updateBookSchema), updateBookData);
router.delete("/:id", deleteBookData);

export default router;

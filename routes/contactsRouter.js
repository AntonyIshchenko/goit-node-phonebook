import express from "express";
import {
  getAllContacts,
  deleteContact,
  createContact,
} from "../controllers/contactsControllers.js";
import validateBody from "../helpers/validateBody.js";
import { createContactSchema } from "../schemas/contactsSchemas.js";
import validateId from "../middlewares/validateId.js";

const contactsRouter = express.Router();

contactsRouter.get("/", getAllContacts);
contactsRouter.post("/", validateBody(createContactSchema), createContact);

contactsRouter.delete("/:id", validateId, deleteContact);

export default contactsRouter;

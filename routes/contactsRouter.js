import express from 'express';
import {
  getAllContacts,
  deleteContact,
  createContact,
} from '../controllers/contactsControllers.js';

const contactsRouter = express.Router();

contactsRouter.get('/', getAllContacts);
contactsRouter.post('/', createContact);

contactsRouter.delete('/:id', deleteContact);

export default contactsRouter;

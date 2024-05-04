import contactsService from '../services/contactsServices.js';

export const getAllContacts = async (req, res, next) => {
  try {
    const contacts = await contactsService.getContacts();

    res.json(contacts);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const deleteContact = (req, res) => {};

export const createContact = (req, res) => {};

import contactsService from '../services/contactsServices.js';
import HttpError from '../helpers/HttpError.js';
export const getAllContacts = async (req, res, next) => {
  try {
    const contacts = await contactsService.getContacts(req.user._id);

    res.json(contacts);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const deleteContact = async (req, res, next) => {
  try {
    const { id } = req.params;

    const deleted = await contactsService.removeContact(id, req.user._id);
    if (!deleted) {
      throw HttpError(404);
    }
    res.json(deleted);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const createContact = async (req, res, next) => {
  try {
    const created = await contactsService.createOneContact({
      ...req.body,
      owner: req.user.id,
    });
    res.status(201).json(created);
  } catch (error) {
    console.log(error);
    next(next);
  }
};

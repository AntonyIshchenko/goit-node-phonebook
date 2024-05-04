import Contact from "../db/models/Contact.js";

const getContacts = () => Contact.find();

const createOneContact = (contactData) => Contact.create(contactData);

const removeContact = (id) => Contact.findByIdAndDelete(id);

export default {
  getContacts,
  createOneContact,
  removeContact,
};

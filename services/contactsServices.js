import Contact from '../db/models/Contact.js';

const getContacts = (owner) => Contact.find({ owner });

const createOneContact = (contactData) => Contact.create(contactData);

const removeContact = (id, owner) =>
  Contact.findByOneAndDelete({ _id: id, owner });

export default {
  getContacts,
  createOneContact,
  removeContact,
};

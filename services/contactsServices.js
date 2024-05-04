import Contact from '../db/models/Contact.js';

function getContacts() {
  return Contact.find();
}

// function getContacts() {
//   return Contact.find();
// }

// function getContacts() {
//   return Contact.find();
// }

export default {
  getContacts,
};

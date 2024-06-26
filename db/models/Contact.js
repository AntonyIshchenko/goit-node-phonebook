import { Schema, model } from 'mongoose';

const contactSchema = new Schema(
  {
    name: { type: String, required: true },
    number: { type: String, required: true },
    owner: { type: Schema.Types.ObjectId, ref: 'user', required: true },
  },
  { versionKey: false }
);

const Contact = model('contact', contactSchema);

export default Contact;

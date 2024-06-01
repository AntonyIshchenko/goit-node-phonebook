import { Schema, model } from 'mongoose';
import bcryptjs from 'bcryptjs';

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
    },
    token: {
      type: String,
    },
  },
  {
    versionKey: false,
  }
);

userSchema.methods.hashPassword = async function () {
  this.password = await bcryptjs.hash(this.password, 10);
};

userSchema.methods.checkPassword = async function (pass) {
  return await bcryptjs.compare(pass, this.password);
};

export const User = model('user', userSchema);

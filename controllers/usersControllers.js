import {
  findByEmail,
  createUser,
  updateUserToken,
  clearUserToken,
  updateUserAvatar,
} from '../services/usersServices.js';
import HttpError from '../helpers/HttpError.js';
import gravatar from 'gravatar';
import crypto from 'node:crypto';
import fs from 'node:fs/promises';
import path from 'node:path';
import { token } from 'morgan';

export async function registerUser(req, res, next) {
  const { email } = req.body;
  try {
    const user = await findByEmail(email);
    if (user) {
      throw HttpError(409);
    }
    const avatar = gravatar.url(email);
    const result = await createUser({ ...req.body, avatar });
    res.status(201).json({
      user: {
        name: result.name,
        email: result.email,
        avatar: result.avatar,
      },
      token: result.token,
    });
  } catch (error) {
    next(error);
  }
}

export async function loginUser(req, res, next) {
  const { email, password } = req.body;
  try {
    const user = await findByEmail(email);
    if (!user) {
      throw HttpError(401);
    }

    if (!user.checkPassword(password)) {
      throw HttpError(401);
    }

    const result = await updateUserToken(user._id);

    res.json({
      user: {
        name: result.name,
        email: result.email,
        avatar: result.avatar,
      },
      token: result.token,
    });
  } catch (error) {
    next(error);
  }
}

export async function logoutUser(req, res, next) {
  try {
    await clearUserToken(req.user._id);
    res.sendStatus(204);
  } catch (err) {
    next(HttpError(500));
  }
}

export async function currentUser(req, res, next) {
  const { name, email, avatar } = req.user;

  res.json({ name, email, avatar });
}

export async function updateAvatar(req, res, next) {
  try {
    if (!req.file) throw HttpError(400, 'File not found');

    const fileName = req.file.path;

    const { _id: id } = req.user;
    const newName = `${id}-${crypto.randomUUID()}${path.extname(fileName)}`;

    await fs.rename(fileName, path.resolve('public/avatars', newName));

    const result = await updateUserAvatar(id, `/avatars/${newName}`);
    res.json({ avatarURL: result.avatar });
  } catch (error) {
    next(error);
  }
}

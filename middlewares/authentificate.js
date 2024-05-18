import HttpError from '../helpers/HttpError.js';
import jwt from 'jsonwebtoken';
import { findById } from '../services/usersServices.js';

const authentificate = async (req, res, next) => {
  try {
    const [bearer, token] = String(req.headers.authorization).split(' ');

    console.log(req.headers);

    if (!bearer || bearer !== 'Bearer' || !token) throw HttpError(401);

    const payload = jwt.verify(token, process.env.SECRET_KEY);
    const user = findById(payload.id);

    if (!user || user.token !== token) throw HttpError(401);

    req.user = user;
    next();
  } catch (error) {
    next(error.status ? error : HttpError(401));
  }
};

export default authentificate;

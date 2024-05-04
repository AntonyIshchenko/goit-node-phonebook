import { isValidObjectId } from "mongoose";
import HttpError from "../helpers/HttpError.js";

const validateId = (req, _, next) => {
  const { id } = req.params;
  const contactId = isValidObjectId(id);
  if (!contactId) {
    next(HttpError(404));
  }
  next();
};
export default validateId;

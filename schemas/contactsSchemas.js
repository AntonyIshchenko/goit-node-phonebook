import Joi from "joi";

export const createContactSchema = Joi.object({
  name: Joi.string().required().min(2),
  number: Joi.string().required(),
});

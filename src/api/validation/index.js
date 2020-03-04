import joi from 'joi';

export const postFormSchema = joi.object({
  email: joi
    .string()
    .email()
    .required(),
  phone: joi
    .string()
    .regex(new RegExp('^(8+([0-9]){10})$'))
    .length(11)
    .required(),

  description: joi.string().max(500),
});

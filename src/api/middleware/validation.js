import HttpError from '../utils/error';
import validate from '../utils/validate';

export const validateBody = schema => async (req, _, next) => {
  try {
    await validate(req.body, schema);
    next();
  } catch (error) {
    next(new HttpError('Incorrect body', 422));
  }
};

import joi from 'joi';

const validate = (val, schema) =>
  new Promise((resolve, reject) =>
    joi.validate(val, schema, {}, err => (err ? reject(err) : resolve())),
  );

export default validate;

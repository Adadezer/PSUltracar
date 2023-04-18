import Joi from 'joi';

const schemaValidations = {
  name: () => Joi.string().min(3).required(),
};

export default schemaValidations;
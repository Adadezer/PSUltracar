import Joi from 'joi';

const schemaValidations = {
  name: () => Joi.string().min(3).required(),
  collaborator: () => Joi.string().min(3).required(),
  dateStart: () => Joi.string().min(10).required(),
  dateEnd: () => Joi.string().min(10).required(),
};

export default schemaValidations;
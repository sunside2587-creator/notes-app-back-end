const options = {
  abortEarly: false,
  allowUnknown: false,
  stripUnknown: true,
};

const validate = (schema) => (req, res, next) => {
  const { error, value } = schema.validate(req.body ?? {}, options);

  if (error) return next(error);
  req.validated = value;
  next();
};

const validateQuery = (schema) => (req, res, next) => {
  const { error, value } = schema.validate(req.query, options);

  if (error) return next(error);
  req.validated = value;
  next();
};

export { validate, validateQuery };

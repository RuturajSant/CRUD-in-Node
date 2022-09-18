const joi = require('joi');

function registerValidation(user) {
    const schema = joi.object({
        firstName: joi.string().min(4).required(),
        lastName: joi.string().min(4).required(),
        email: joi.string().min(6).required().email(),
        password: joi.string().min(4).required(),
        phone: joi.string().min(10).required().max(10)
    });
    return schema.validate(user);
}

function loginValidation(user) {
    const schema = joi.object({
        email: joi.string().min(6).required().email(),
        password: joi.string().min(4).required()
    });
    return schema.validate(user);
}

module.exports = { loginValidation, registerValidation };
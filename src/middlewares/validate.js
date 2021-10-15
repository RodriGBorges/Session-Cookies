const {check} = require('express-validator');

module.exports = [
    check('nombre')
    .notEmpty().withMessage('Nombre requerido'),
    check('email')
    .notEmpty().withMessage('Email requerido').bail()
    .isEmail().withMessage('Debe ingresar un mail válido'),
    check('color')
    .notEmpty().withMessage('Color requerido'),
    check('edad')
    .isInt().withMessage('La edad debe ser un número')
]
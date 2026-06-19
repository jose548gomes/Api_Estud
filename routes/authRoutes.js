const express = require('express');
const { body } = require('express-validator');
const { register, login } = require('../controllers/authController');
const validate = require('../middleware/validate');

const router = express.Router();

router.post('/register',
  body('name').notEmpty().withMessage('Nome obrigatório'),
  body('email').isEmail().withMessage('Email inválido'),
  body('password').isLength({ min: 6 }).withMessage('Mínimo 6 caracteres'),
  validate,
  register
);

router.post('/login',
  body('email').isEmail().withMessage('Email inválido'),
  body('password').notEmpty().withMessage('Senha obrigatória'),
  validate,
  login
);

module.exports = router;
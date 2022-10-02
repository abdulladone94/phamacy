import express from 'express';
import { body, validationResult } from 'express-validator';

const routes = express.Router();

routes.post('/signup',
  body('email').isEmail().withMessage('Invalid Email'),
  body('password').isLength({ min: 5 }).withMessage('Invalid Password'),
  async (req, res) => {
    const validationErrors = validationResult(req);
    if (!validationErrors.isEmpty()) {
      const errors = validationErrors.array().map((error) => {
        return ({
          msg: error.msg,
        });
      });
      return res.json({ errors });
    }
    const { email, password } = req.body;

    res.json({ email, password });
  });

export default routes;






















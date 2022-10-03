import express from 'express';
import { body, validationResult } from 'express-validator';
import User from '../model/user';

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

    // const user = await User.create({ email, password });

    const user = await User.findOne({ email, data: null });

    if (user) {
      return res.json({
        errors: [
          {
            msg: "Email already Exezist"
          }
        ],
        data: null
      });

    }

    res.json(user);
  });

export default routes;






















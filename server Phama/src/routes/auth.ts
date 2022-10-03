import express from 'express';
import { body, validationResult } from 'express-validator';
import User from '../model/user';
import bcrypt from 'bcryptjs';
import JWT from 'jsonwebtoken';

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

    const hashedPassoword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      email,
      password: hashedPassoword
    });

    const token = await JWT.sign({ email: newUser.email }, process.env.JWT_TOKEN as string, { expiresIn: 360000 });

    res.json({
      data: {
        token,
        user: {
          email: newUser.email,
          id: newUser._id,
        }
      }
    });
  });

export default routes;






















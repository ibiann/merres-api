import { UserService } from "../services/user.service";
import { HttpStatusCode } from "../utils/constants";

const jwt = require('jwt')
const bcrypt = require('bcrypt');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel')

// @route   POST /api/users
// @access  Public
const createRegisterUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body

    if (!name || !email || !password) {
        res.status(HttpStatusCode) 
        throw new Error(`Invalid username or password provided`);
    }

    res.json({ message: 'Login user successfully' })
})
const createLoginUser = asyncHandler(async (req, res) => {
    try {
        res.json({ message: 'Login user successfully' })
    } catch (error) {
      res.status(HttpStatusCode.INTERNAL_SERVER).json({
        errors: error.message
      });
    }
  });

  const createGetUser = asyncHandler(async (req, res) => {
    try {
        res.json({ message: 'Get user successfully' })
    } catch (error) {
      res.status(HttpStatusCode.INTERNAL_SERVER).json({
        errors: error.message
      });
    }
  });

export const UserController = { createRegisterUser, createLoginUser, createGetUser}
import express from "express";
import { UserController } from "../../controllers/user.controller";

const router = express.Router();

router
    .route('/')
    .post(UserController.createRegisterUser)

router
    .route("/login")
    .post(UserController.createLoginUser)

router
    .route("/me")
    .get(UserController.createGetUser);

export const userRoutes = router
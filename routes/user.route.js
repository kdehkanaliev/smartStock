import { Router } from "express";
import {
  createUser,
  getUser,
  loginUser,
  putUser,
} from "../controllers/user.controller.js";
import basicAuth from "../middlewares/basicauth.middleware.js";

let userRouter = new Router();

userRouter.get("/auth/singin", basicAuth, loginUser);

userRouter.get("/users", getUser);

userRouter.post("/auth/singup", createUser);

userRouter.put("/user/update", basicAuth, putUser);

export default userRouter;

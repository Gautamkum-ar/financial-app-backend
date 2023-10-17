import express from "express";
import { getProfile, signin, singup } from "../controllers/user-controller.js";
import { checkAuth } from "../middleware/checkAuth.js";

const userRouter = express.Router();

userRouter.post("/auth/user/singup", singup);
userRouter.post("/auth/user/login", signin);
userRouter.get("/auth/user/profile", checkAuth, getProfile);

export default userRouter;

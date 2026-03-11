import express from "express";
import env from "dotenv";
import connectDB from "./configs/db.js";

import userRouter from "./routes/user.route.js";

import handler from "./middlewares/errorHandler.middleware.js";

env.config();

connectDB();

const app = express();

app.use(express.json());

app.use("/api", userRouter);

app.use(handler);

export default app;

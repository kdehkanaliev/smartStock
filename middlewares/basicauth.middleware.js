import userModel from "../models/user.model.js";
import bcrypt from "bcryptjs";

let basicAuth = async (req, res, next) => {
  try {
    let data = req.headers.authorization.split(" ")[1];
    let [username, password] = Buffer.from(data, "base64")
      .toString("utf-8")
      .split(":");

    console.log(username, password);
    let userData = await userModel.findOne({ username });
    console.log(userData);
    if (!userData) throw new Error("User not Found");

    if (!bcrypt.compare(password, userData.password))
      throw new Error("Username or password wrong");

    req.user = userData;
    next();
  } catch (error) {
    next(error);
  }
};

export default basicAuth;

import userModel from "../models/user.model.js";

let loginUser = async (req, res, next) => {
  res.status(201).json({
    status: "succes",
    message: "User muvaffaqiyatli kirdi",
    data: req.user,
  });
};

let createUser = async (req, res, next) => {
  try {
    let { username, password, role, email } = req.body;
    let data = new userModel({
      username,
      password,
      role,
      email,
    });

    await data.save();

    res.status(201).json({
      status: "succes",
      message: "User muvaffaqiyatli yuklandi",
      data: data,
    });
  } catch (err) {
    if (err.code === 11000) {
      return res.status(400).json({
        message: "Username already exists",
      });
    }
  }
};

let getUser = async (req, res, next) => {
  try {
    let data = await userModel.find();

    res.status(200).json({
      status: "succes",
      message: "User muvaffaqiyatli olindi",
      data: data,
    });
  } catch (error) {
    throw error;
  }
};

let putUser = async (req, res, next) => {
  try {
    let { username, email, avatar } = req.body;

    let data = await userModel.findByIdAndUpdate(
      req.user.id,
      {
        username,
        email,
        avatar,
      },
      { new: true },
    );

    res.status(200).json({
      status: "success",
      message: "User muvaffaqiyatli yangilandi",
      data: data,
    });
  } catch (error) {
    next(error);
  }
};

export { getUser, createUser, putUser, loginUser };

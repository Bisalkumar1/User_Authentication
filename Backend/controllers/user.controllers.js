import { User } from "../models/User.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import jwt from "jsonwebtoken";

const registerUser = async (req, res) => {
  try {
    const { username, email, fullName, password } = req.body;

    if (
      [fullName, username, email, password].some(
        (field) => field?.trim() === ""
      )
    ) {
      return res.status(400).json({ message: "All fields are required" }).end();
    }

    const existedUser = await User.findOne({
      $or: [{ username }, { email }],
    });

    if (existedUser) {
      return res.status(409).json({ message: "User already Exists" }).end();
    }

    const user = await User.create({
      fullName,
      email,
      password,
      username: username.toLowerCase(),
    });

    // remove password and refresh token field from response

    const creatednewUser = await User.findById(user._id).select(
      "-password" //.select -> these two will not required, by default all fields are selected from user
    );

    // check for user creation
    if (!creatednewUser) {
      return res
        .status(500)
        .json({ message: "something went wrong while registering the User" })
        .end();
    }

    return res
      .status(201)
      .json(
        new ApiResponse(200, creatednewUser, "User registered successfully")
      );
  } catch (error) {
    return res.status(500).json({
      message: error.message ? error.message : "Something Went Wrong",
    });
  }
};

const loginUser = async (req, res) => {
  try {

    const { email, password } = req.body;

    if (!password && !email) {

      return res
        .status(400)
        .json({ message: "email and password both are required" });
    }
 console.log(password,email);
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: "User does not exists, register as new user or sign up",
      });
    }


    const isPasswordValid = await user.isPasswordCorrect(password);

    if (!isPasswordValid) {
      return res.status(402).json({
        message: "Password is incorrect",
      });
    }

    const loggedInUser = await User.findById(user._id).select("-password ");

    const AccessToken = jwt.sign(
      { _id: user._id },
      String(process.env.ACCESS_TOKEN_SECRET),
      { expiresIn: process.env.ACCESS_TOKEN_EXPIRY }
    );

    return res.status(200).json(
      new ApiResponse(
        200,
        {
          user: loggedInUser,
          AccessToken,
        },
        "User logged In successfully"
      )
    );
  } catch (error) {
    return res.status(500).json({
      message: error.message ? error.message : "Something Went Wrong",
    });
  }
};

const changeCurrentPassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body;

    const user = await User.findById(req.user?._id);
    const isPasswordCorrect = await user.isPasswordCorrect(oldPassword);
    if (!isPasswordCorrect) {
      return res.status(402).json({
        message: "Old Password is invalid",
      });
    }

    user.password = newPassword;
    await user.save({ validateBeforeSave: false });

    return res
      .status(200)
      .json(new ApiResponse(200, {}, "Password changed successfully"));
  } catch (error) {
    return res.status(500).json({
      message: error.message ? error.message : "Something Went Wrong",
    });
  }
};

export { registerUser, loginUser, changeCurrentPassword };

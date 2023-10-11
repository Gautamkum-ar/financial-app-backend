import { ErrorMessage, SuccessMessage } from "../const/message.js";
import asyncHandler from "../handler/catchAsync.js";
import ErrorResponse from "../handler/error.js";
import userModel from "../model/user-model.js";
import { generateToken } from "../services/token.js";

// @desc create new user
// Route POST /v1/api/financial/user/signup

export const singup = asyncHandler(async (req, res, next) => {
	const { name, email, password, username } = req.body;
	try {
		if (!name || !email || !password || !username) {
			return next(new ErrorResponse(ErrorMessage.MISSING_FIELD, 400));
		}
		const newUser = await User.create({
			name: name,
			username: username,
			email: email,
			password: password,
		});
		await newUser.save();
		return res.status(200).json({
			message: SuccessMessage.USER_CREATED,
			success: true,
		});
	} catch (error) {
		return next(new ErrorResponse(error.message, 500));
	}
});

//@desc login user
// Route get /v1/api/financial/user/login
export const signin = asyncHandler(async (req, res, next) => {
	const { email, password } = req.body;
	try {
		if (!email || !password) {
			return next(new ErrorResponse(ErrorMessage.MISSING_FIELD, 400));
		}
		//check for existing user
		const user = await userModel.findOne({ email }).select("-password");
		if (!user) {
			return next(new ErrorResponse(`Invalid Credentials`, 401));
		}
		return res.status(200).json({
			message: "User login successfully",
			success: true,
			data: {
				user,
				encodedToken: generateToken(user),
			},
		});
	} catch (error) {
		return next(new ErrorResponse(error.message, 500));
	}
});

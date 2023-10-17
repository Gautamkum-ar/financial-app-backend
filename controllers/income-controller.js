import { ErrorMessage, SuccessMessage } from "../const/message.js";
import asyncHandler from "../handler/catchAsync.js";
import ErrorResponse from "../handler/error.js";
import incomeModel from "../model/income-model.js";
import userModel from "../model/user-model.js";

//@desc add income to list
// Route POST /v1/api/income/add-income

export const addIncome = asyncHandler(async (req, res, next) => {
	// const { user } = req.user;
	const { amount, description } = req.body;
	try {
		if (!amount || !description)
			return next(new ErrorResponse(ErrorMessage.MISSING_FIELD, 400));

		const newIncome = new incomeModel({
			// userId: user._id,
			amount: amount,
			description: description,
		});
		await newIncome.save();
		// await userModel.findByIdAndUpdate(
		// 	{ _id: user._id },
		// 	{
		// 		$push: {
		// 			income: newIncome._id,
		// 		},
		// 	},
		// 	{
		// 		new: true,
		// 	}
		// );
		return res.status(200).json({
			message: SuccessMessage.INCOME_ADDED,
			success: true,
			data: newIncome,
		});
	} catch (error) {
		return next(new ErrorResponse(error.message, 500));
	}
});

export const getAllIncome = asyncHandler(async (req, res, next) => {
	try {
		const findAllTransaction = await incomeModel.find().select("-__v");
		return res.status(200).json({
			message: SuccessMessage.DATA_LOADED,
			success: true,
			data: findAllTransaction,
		});
	} catch (error) {
		return next(new ErrorResponse(error.message, 500));
	}
});

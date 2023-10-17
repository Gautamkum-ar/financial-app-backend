import { ErrorMessage, SuccessMessage } from "../const/message.js";
import asyncHandler from "../handler/catchAsync.js";
import expenseModel from "../model/expense-model.js";
import savingModel from "../model/saving-model.js";

//@desc Add expense to list
//Route POST /v1/api/expenses/add-expense
export const addExpense = asyncHandler(async (req, res, next) => {
	const { amount, category, description } = req.body;
	try {
		if (!amount || !description || !category)
			return next(new ErrorResponse(ErrorMessage.MISSING_FIELD, 400));
		const newExpense = new expenseModel({
			amount: amount,
			description: description,
			category: category,
		});
		await newExpense.save();
		return res.status(200).json({
			message: SuccessMessage.EXPENSE_ADDED,
			success: false,
			data: newExpense,
		});
	} catch (error) {
		return next(new ErrorResponse(error.message, 500));
	}
});

//@desc get all expense  list
//Route GET /v1/api/expenses/expenses

export const getExpenses = asyncHandler(async (req, res, next) => {
	try {
		const findExpense = await expenseModel.find().select("-__v");
		return res.status(200).json({
			message: SuccessMessage.DATA_LOADED,
			success: true,
			data: findExpense,
		});
	} catch (error) {
		return next(new ErrorResponse(error.message, 500));
	}
});

//@desc Add saving to  list
//Route POST /v1/api/savings/add-saving
export const addSaving = asyncHandler(async (req, res, next) => {
	const { amount, category, description } = req.body;
	try {
		if (!amount || !description || !category)
			return next(new ErrorResponse(ErrorMessage.MISSING_FIELD, 400));
		const newSaving = new savingModel({
			amount: amount,
			description: description,
			category: category,
		});
		await newSaving.save();
		return res.status(200).json({
			message: SuccessMessage.EXPENSE_ADDED,
			success: false,
			data: newSaving,
		});
	} catch (error) {
		return next(new ErrorResponse(error.message, 500));
	}
});

//@desc get all saving list
//Route GET /v1/api/savings/savings

export const getSaving = asyncHandler(async (req, res, next) => {
	try {
		const findSaving = await savingModel.find().select("-__v");
		return res.status(200).json({
			message: SuccessMessage.DATA_LOADED,
			success: true,
			data: findSaving,
		});
	} catch (error) {
		return next(new ErrorResponse(error.message, 500));
	}
});

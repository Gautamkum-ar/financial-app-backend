import express from "express";
import {
	addExpense,
	addSaving,
	getExpenses,
	getSaving,
} from "../controllers/expense-controller.js";

const ExpenseRouter = express.Router();

ExpenseRouter.post("/expense/add-expense", addExpense);
ExpenseRouter.get("/expense/expenses", getExpenses);
ExpenseRouter.post("/savings/add-saving", addSaving);
ExpenseRouter.get("/savings/savings", getSaving);

export default ExpenseRouter;

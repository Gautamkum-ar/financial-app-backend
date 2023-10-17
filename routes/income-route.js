import express from "express";
import { addIncome, getAllIncome } from "../controllers/income-controller.js";
// import { checkAuth } from "../middleware/checkAuth.js";

const IncomeRouter = express.Router();

IncomeRouter.post("/income/add-income", addIncome);
IncomeRouter.get("/income/incomes", getAllIncome);

export default IncomeRouter;

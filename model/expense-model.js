import mongoose from "mongoose";

const ExpenseSchema = new mongoose.Schema(
	{
		userId: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: "User",
		},
		amount: {
			type: Number,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		category: {
			type: String,
			required,
		},
	},
	{
		timestamps: true, // Saves createdAt and updatedAt as dates automatically
	}
);
export default mongoose.model("Expense", ExpenseSchema);

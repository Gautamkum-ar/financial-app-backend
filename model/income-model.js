import mongoose from "mongoose";

const IncomeSchema = new mongoose.Schema(
	{
		userId: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: "User",
		},
		description: {
			type: String,
			required: true,
		},
		amount: {
			type: Number,
			required: true,
		},
	},
	{
		timestamps: true, //this will add createdAt and updatedAt fields to the schema
	}
);

export default mongoose.model("Income", IncomeSchema);

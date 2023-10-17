import mongoose from "mongoose";

const SavingSchema = new mongoose.Schema(
	{
		// userId: {
		// 	type: mongoose.Schema.Types.ObjectId,
		// 	required: true,
		// 	ref: "User",
		// },
		amount: {
			type: Number,
		},
		description: {
			type: String,
		},
		category: {
			type: String,
		},
	},
	{
		timestamps: true,
	}
);
export default mongoose.model("Saving", SavingSchema);

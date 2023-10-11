import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "Please enter your Name"],
		},
		email: {
			type: String,
			unique: true,
			required: [true, "please provide an Email"],
		},
		password: {
			type: String,
			required: true,
		},
		income: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Income",
			},
		],
		expense: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Expense",
			},
		],
	},
	{
		timestamps: true, //this will add createdAt and updatedAt to the model schema
	}
);

// password is hashed before saving it into DB
// userSchema.pre("save", async function (next) {
//     if (!this.isModified("password")) return next();
//     const salt = await bcrypt.genSalt(10);
//     this.password = await bcrypt.hash(this.password, salt);
//     })
export default mongoose.model("User", userSchema);

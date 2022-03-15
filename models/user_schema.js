const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

let validateEmail = function (email) {
	let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	return re.test(email);
};

const userSchema = new Schema(
	{
		full_name: {
			type: String,
			trim: true,
			required: [true, "full name field is required"],
		},
		email: {
			type: String,
			unique: true,
			lowercase: true,
			trim: true,
			required: [true, "email field is required"],
			validate: [validateEmail, "Please fill a valid email address"],
			match: [
				/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
				"Please fill a valid email address",
			],
		},
		password: {
			type: String,
			required: [true, "password is required"],
		},
	},
	{
		timestamps: true,
	}
);

userSchema.methods.comparePassword = function (password) {
	return bcrypt.compareSync(password, this.password, function (result) {
		return result;
	});
};

module.exports = model("User", userSchema);

const { Schema, model } = require("mongoose");

const stageSchema = new Schema(
	{
		title: {
			type: String,
			required: [true, "title field is required"],
		},
		description: {
			type: String,
			required: [true, "description field is required"],
		},
		location: {
			type: String,
			// required: [true, "location field is required"],
		},
		festival: {
			type: Schema.Types.ObjectId,
			ref: "festival",
			required: [true, "festival field is required"],
		},
		image_path: {
			type: String,
		},
	},
	{
		timestamps: true,
	}
);

module.exports = model("Festival", stageSchema);

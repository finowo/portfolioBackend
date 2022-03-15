const Stage = require("../models/stage_schema");

const getAllStages = (req, res) => {
	Festival.find()
		.then((data) => {
			if (data) {
				res.status(200).json(data);
			} else {
				res.status(404).json("No Stages found");
			}
		})
		.catch((err) => {
			res.status(500).json(err);
		});
};

const addStage = (req, res) => {
	let stageData = req.body;

	Stage.create(festivalData)
		.then((data) => {
			if (data) {
				res.status(201).json(data);
			}
		})
		.catch((err) => {
			if (err.name === "ValidaitonError") {
				res.status(422).json(err);
			} else {
				console.error(err);
				res.status(500).json(err);
			}
		});
};

module.exports = {
	getAllStages,
	addStages,
};

const Stage = require("../models/stage_schema");
const Festival = require("../models/festival_schema");

const getAllStages = (req, res) => {
	Stage.find()
		.populate("festival")
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

	Stage.create(stageData)
		.then((data) => {
			if (data) {
				Festival.findByIdAndUpdate(
					{
						_id: data.festival,
					},
					{
						$push: { stages: data._id },
					},
					(error, success) => {
						if (error) {
							res.status(500).json(err);
						}
					}
				);
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

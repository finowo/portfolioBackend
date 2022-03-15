const Festival = require("../models/festival_schema");

const getAllFestivals = (req, res) => {
	Festival.find()
		.then((data) => {
			if (data) {
				res.status(200).json(data);
			} else {
				res.status(404).json("No Festivals found");
			}
		})
		.catch((err) => {
			res.status(500).json(err);
		});
};

const addFestival = (req, res) => {
	let festivalData = req.body;

	Festival.create(festivalData)
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
	getAllFestivals,
	addFestival,
};

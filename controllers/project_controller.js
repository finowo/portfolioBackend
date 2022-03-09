const Project = require("../models/project_schema");

const getAllProjects = (req, res) => {
	Project.find()
		.then((data) => {
			if (data) {
				res.status(200).json(data);
			} else {
				res.status(404).json("No Projects found");
			}
		})
		.catch((err) => {
			res.status(500).json(err);
		});
};

const getSingleProject = (req, res) => {
	Project.findById(req.params.id)
		.then((data) => {
			if (data) {
				res.status(200).json(data);
			} else {
				res.status(404).json(
					`Project with id ${req.params.id} not found`
				);
			}
		})
		.catch((err) => {
			console.error(err);
			res.status(500).json(err);
		});
};

const addProject = (req, res) => {
	let projectData = req.body;

	Project.create(projectData)
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
	getAllProjects,
	getSingleProject,
	addProject,
};

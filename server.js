const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");

require("dotenv").config();
require("./db")();

const {
	getAllProjects,
	getSingleProject,
	addProject,
} = require("./controllers/project_controller.js");
const {
	register,
	login,
	loginRequired,
} = require("./controllers/user_controller.js");

const port = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
	if (
		req.headers &&
		req.headers.authorization &&
		req.headers.authorization.split(" ")[0] === "Bearer"
	) {
		jwt.verify(
			req.headers.authorization.split(" ")[1],
			"login_example",
			(err, decode) => {
				if (err) req.user = undefined;
				req.user = decode;
				next();
			}
		);
	} else {
		req.user = undefined;
		next();
	}
});

////////////////////ROUTES////////////////////

app.get("/projects", getAllProjects);
app.get("/projects/:id", loginRequired, getSingleProject);
app.post("/projects", loginRequired, addProject);

app.post("/register", register);
app.post("/login", login);

/////////////////////////////////////////////

app.listen(port, () => {
	console.log(`App listening at http://localhost:${port}`);
});

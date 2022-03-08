const express = require("express");
const cors = require("cors");

require("dotenv").config();
require("./db")();

const {
  getAllProjects,
  getSingleProject,
  addProject,
} = require("./controllers/project_controller.js");

const port = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json());

////////////////////Routes////////////////////

app.get("/projects", getAllProjects);
app.get("/projects/:id", getSingleProject);
app.post("/projects", addProject);

/////////////////////////////////////////////

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

const express = require("express");
const cors = require("cors");

require("dotenv").config();
require("./db")();
const port = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json());

////////////////////Routes////////////////////

app.get("/projects", (req, res) => {
  res.json("Hello World!");
});

/////////////////////////////////////////////

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

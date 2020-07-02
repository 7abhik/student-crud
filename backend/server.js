const express = require("express");

const app = express();

app.use(express.json());


// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Crud backend." });
});


require("./routes/student.route")(app);
require("./routes/faculty.route")(app);
require("./routes/subject.route")(app);


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
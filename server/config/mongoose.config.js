const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/soloDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Established a connection to database"))
  .catch((err) =>
    console.log("Something went wrong when connecting", err)
  );
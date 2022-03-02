const mongoose = require("mongoose");

const init = () => {
  mongoose.set("debug", true);

  mongoose
    .connect(
      "mongodb+srv://finiadt:q0wRvayFyXaIvxbG@cluster0.3bboq.mongodb.net/portfolio_db?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
      }
    )
    .catch((err) => {
      console.error("error: " + err.stack);
      process.exit(1);
    });
  mongoose.connection.on("open", () => {
    console.log("Connected to DB");
  });
};

mongoose.Promise = global.Promise;

module.exports = init;

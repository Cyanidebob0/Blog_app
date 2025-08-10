const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connection successful"))
  .catch((err) => console.log(`Unable to connect to database ${err}`));

module.exports = mongoose.connection;

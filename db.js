const mongoose = require("mongoose");


mongoose.connect(process.env.CONNECTION_STRING);
const db = mongoose.connection;

db.on("open", () => {
  console.log("MongoDB connection established");
});

module.exports = mongoose;

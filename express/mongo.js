const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();
const uri = process.env.MONGO_CONNECTION;

const connect = () => mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .catch(err => {
    console.error("Error connecting to MongoDB");
    console.error(err);
  });

module.exports = { connect };

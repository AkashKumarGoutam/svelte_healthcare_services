const mongoose = require("mongoose");

const servicesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
});

const servicesModel = mongoose.model("services", servicesSchema);
module.exports = servicesModel;

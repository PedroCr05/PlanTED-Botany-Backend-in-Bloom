const mongoose = require(`mongoose`);
const { Schema } = require(`mongoose`);

const Plant = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
  },
  { timestample: true }
);

module.exports = mongoose.model(`plants`, Plant);

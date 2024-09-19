const mongoose = require("mongoose");
const Enum = require("enum");
const recordSchema = new mongoose.Schema({
  sl_No: {
    type: Number,
  },
  name: {
    type: String,
    isRequired: true,
  },
  category: {
    type: String,
  },
  invitation_Type: {
    type: String,
    enum: ["family", "friend"],
    default: "family",
    isRequired: true,
  },
  member_Count: {
    type: Number,
  },
  address: {
    type: String,
    isRequired: true,
  },
  phoneNo: {
    type: String,
    isRequired: true,
  },
});
const Record = mongoose.model("record", recordSchema);
module.exports = Record;

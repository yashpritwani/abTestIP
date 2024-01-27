const mongoose = require("mongoose")

const randomSchema = new mongoose.scehma({
  fName: {
    type: String
  },
  lName: {
    type: String
  }
});

module.exports = mongoose.model('random', randomSchema);
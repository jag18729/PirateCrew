const mongoose = require('mongoose');
const PirateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "You need a name!"],
    minlength: [3, "Must be 3 or more characters!"]
  },
  imageUrl: {
    type: String,
    required: [true, "You need a URL!"],
    minlength: [5, "Image URL must be 5 or more characters!"]
  },
  number: {
    type: Number,
    required: [true, "You need a number of chests!"],
  },
  phrase: {
    type: String,
    required: [true, "You need a catch phrase!"],
    minlength: [5, "Catch phrase must be 5 or more characters!"]
  },
  position: {
    type: String,
    required: [true, "You need a position!"],
  },
  pegleg: {
    type: Boolean,
    default: true
  },
  eyepatch: {
    type: Boolean,
    default: true
  },
  hookhand: {
    type: Boolean,
    default: true
  }

}, { timestamps: true });


module.exports.Pirate = mongoose.model("Pirate", PirateSchema);
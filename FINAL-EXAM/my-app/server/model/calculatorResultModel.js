const mongoose = require('mongoose');

const calculatorResultSchema = new mongoose.Schema({
  operand1: {
    type: Number,
    required: true,
  },
  operand2: {
    type: Number,
    required: true,
  },
  operation: {
    type: String,
    required: true,
  },
  result: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const CalculatorResult = mongoose.model('CalculatorResult', calculatorResultSchema);

module.exports = CalculatorResult;

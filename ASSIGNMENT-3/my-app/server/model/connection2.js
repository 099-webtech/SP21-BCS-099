const mongoose = require('mongoose');

const contactUsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
});

const ContactUsData = mongoose.model('ContactUsData', contactUsSchema);

module.exports = ContactUsData;

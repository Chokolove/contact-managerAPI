// External Dependancies
const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
  name: String,
  title: String,
  email: String,
  tel: Number
})

module.exports = mongoose.model('Contact', contactSchema)
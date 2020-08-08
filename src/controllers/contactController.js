// External Dependancies
const boom = require('boom')

// Get Data Models
const Contact = require('../models/contact')

// Get all contacts
exports.getContacts = async (req, reply) => {
  try {
    const contacts = await Contact.find()
    return contacts
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Get single contact by ID
exports.getSingleContact = async (req, reply) => {
  try {
    const id = req.params.id
    const contact = await Contact.findById(id)
    return contact
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Add a new contact
exports.addContact = async (req, reply) => {
  try {
    const contact = new Contact(req.body)
    return contact.save()
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Update an existing contact
exports.updateContact = async (req, reply) => {
  try {
    const id = req.params.id
    const contact = req.body
    const { ...updateData } = contact
    const update = await Contact.findByIdAndUpdate(id, updateData, { new: true })
    return update
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Delete a contact
exports.deleteContact = async (req, reply) => {
  try {
    const id = req.params.id
    const contact = await Contact.findByIdAndRemove(id)
    return contact
  } catch (err) {
    throw boom.boomify(err)
  }
}
// Import our Controllers
const contactController = require('../controllers/contactController')

const routes = [
  {
    method: 'GET',
    url: '/api/contacts',
    handler: contactController.getContacts
  },
  {
    method: 'GET',
    url: '/api/contacts/:id',
    handler: contactController.getSingleContact
  },
  {
    method: 'POST',
    url: '/api/contacts',
    handler: contactController.addContact
  },
  {
    method: 'PUT',
    url: '/api/contacts/:id',
    handler: contactController.updateContact
  },
  {
    method: 'DELETE',
    url: '/api/contacts/:id',
    handler: contactController.deleteContact
  }
]

module.exports = routes
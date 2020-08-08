// Require the framework and instantiate it
const fastify = require('fastify')({
  logger: true
})
const mongoose = require('mongoose')
const routes = require('./src/routes')

// Declare a route
fastify.get('/', async (request, reply) => {
  return { hello: 'world' }
})


fastify.register(require('fastify-cors'), { 
  // put your options here
})

// Run the server!
const start = async () => {
  try {
    await fastify.listen(3000)
    fastify.log.info(`server listening on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

// Connect to DB
mongoose.connect('mongodb://localhost/contactInfo')
  .then(() => console.log('MongoDB connected to contactInfo…'))
  .catch(err => console.log(err))

routes.forEach((route, index) => {
  fastify.route(route)
})

start()
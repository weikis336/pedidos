module.exports = (app) => {
  const router = require('express').Router()
  const controller = require('../controllers/customer/routes-controller.js')

  router.get('/', controller.findAll)

  app.use('/api/customer/routes', router)
}

module.exports = (app) => {
  const router = require('express').Router()
  const controller = require('../controllers/admin/routes-controller.js')

  router.get('/', controller.findAll)

  app.use('/api/admin/routes', router)
}

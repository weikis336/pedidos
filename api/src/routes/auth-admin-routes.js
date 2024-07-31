module.exports = (app) => {
  const router = require('express').Router()
  const controller = require('../controllers/admin/auth-routes-controller.js')

  router.get('/', controller.findAll)

  app.use('/api/auth/admin/routes', router)
}

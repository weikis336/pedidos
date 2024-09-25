module.exports = (app) => { // Exporto una función a la que le paso como parámetro "app"
  const router = require('express').Router() // 'express es la libreria que escucha por los puertos por todas las url que le pasemos. Aquí se carga en la constante "router" en la RAM, la funcion "router()" de la librertia express que se ha llamado mediante "require".
  const controller = require('../controllers/customer/company-controller.js') // En la constante "controller" cargo el archivo "user-controller.js"

  router.get('/', controller.findAll)

  app.use('/api/customer/companies', router)
}

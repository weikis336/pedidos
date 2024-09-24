const sequelizeDb = require('../../models')
const Company = sequelizeDb.Company

exports.findAll = (req, res) => {
  Company.findAll({
    order: [['createdAt', 'DESC']]
  })
    .then(result => {
      res.status(200).send(result)
    }).catch(err => {
      res.status(500).send({
        message: err.errors || 'Algún error ha surgido al recuperar los datos.'
      })
    })
}

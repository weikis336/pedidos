exports.findAll = (req, res) => {
  const routes = {
    '/cliente/login': 'login.html',
    '/cliente/login/reset': 'reset.html'
  }

  res.status(200).send(routes)
}

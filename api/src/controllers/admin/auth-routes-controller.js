exports.findAll = (req, res) => {
  const routes = {
    '/admin/login': 'login.html',
    '/admin/login/reset': 'reset.html'
  }

  res.status(200).send(routes)
}

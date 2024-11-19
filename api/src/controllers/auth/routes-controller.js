exports.findAll = (req, res) => {
  const routes = {
    '/auth': 'auth.html'
  }

  res.status(200).send(routes)
}

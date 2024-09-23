exports.findAll = (req, res) => {
  const routes = {
    '/admin/usuarios': 'users.html',
    '/admin/clientes': 'customers.html',
    '/admin/faqs': 'faqs.html',
    '/admin/empresas': 'companies.html',
    '/admin/categorias': 'product-categories.html',
    '/admin/productos': 'products.html'

  }

  res.status(200).send(routes)
}

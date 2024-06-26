(async () => {

  const fs = require('fs/promises')
  
  try {
    const data = await fs.readFile('data.json', 'utf-8')
    const ticket = JSON.parse(data)
    const products = ticket.factura.productos
    
    
    
    const productosfiltrados = products.filter(element => element.unidades > 1) 

    console.log(productosfiltrados);

  } catch (error) {
    console.log(error)
  }

})()
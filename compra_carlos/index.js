(async () => {

  const fs = require('fs/promises')
  
  try {
    const data = await fs.readFile('data.json', 'utf-8')
    const ticket = JSON.parse(data)
    const products = ticket.factura.productos
    
    

    console.log(products)
    
  } catch (error) {
    console.log(error)
  }

})()
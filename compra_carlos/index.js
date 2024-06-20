(async () => {

  const fs = require('fs/promises')
  
  try {
    const data = await fs.readFile('data.json', 'utf-8')
    const ticket = JSON.parse(data)
    const products = ticket.factura.productos
    
    
    let totalPrecios = 0;
    let totalProductos = products.length ;
    for (Element of products) {
      if (Element.unidades === true) {totalPrecios += Element.precio_unitario * unidades ;}
      else {totalPrecios += Element.precio_unitario;}
    }
    //console.log(products)

    console.log(("Carlos pagó un total de "), totalPrecios,  (" por "),totalProductos, ("productos"));

  } catch (error) {
    console.log(error)
  }

})()
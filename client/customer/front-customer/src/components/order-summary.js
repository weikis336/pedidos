class OrderSummary extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })

    this.data = []
  }

  async connectedCallback () {
    await this.loadData()
    await this.render()
  }

  loadData () {
    this.data = [
      {
        "product": "Cocacola",
        "price": 90.00,
        "type": "16 u, 330ml",
        "quantity": 2,
      },
      {
        "product": "Agua",
        "price": 50.00,
        "type": "24u, 500ml",
        "quantity": 3,
      }
    ]
  }

  render () {
    this.shadow.innerHTML =
      /* html */`
      <style>
        p {
          margin: 0.5rem 0.5rem;
        }

        .order-page {
          height: 90vh;
          display: flex;
          flex-direction: column;
        }

        .product-list {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          flex-grow: 1;
        }

        .product {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: repeat(2, 1fr);
          color: white;
          font-size: 1.25rem;
          margin-bottom: 1rem;
        }

        .left {
          justify-self: start;
          margin-left: 0.5rem;
        }

        .right {
          justify-self: end;
          margin-right: 0.5rem;
        }

        .see-order {
          margin-top: auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-end;
          border: none;
          width: 15rem;
          padding: 0.5rem;
          font-size: 1rem;
          border-radius: 3rem;
          color: hsla(270, 83%, 36%, 1);
          font-weight: 600;
          margin-bottom: 2rem;
        }

        .order-summary {
          display: flex;
          align-items: center;
          flex-direction: column;
        }

        .order-info {
          margin-top: auto;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: repeat(2, 1fr);
          color: white;
          font-size: 1.25rem;
        }

      </style>
      <div class="order-page">
        <div class="product-list">
        </div> 
        <div class="order-summary">
          <div class="order-info">
            <div class="total left">
              <h2>Total</h2>
            </div>
            <div class="total-price right">
              <h2 id="total"></h2>
            </div>
            <div class="description left">
              <p>Impuestos no incluidos</p>
            </div>
          </div>
          <button class="see-order">Finalizar Pedido</button>
        </div>
      </div>
      `
      const productList = this.shadow.querySelector('.product-list')

      this.data.forEach(productItem => {
        const product = document.createElement('div')
        product.classList.add('product')
        productList.appendChild(product)

        const productName = document.createElement('div')
        productName.classList.add('product-name', 'left')
        product.appendChild(productName)

        const name = document.createElement('p')
        name.textContent = productItem.product
        productName.appendChild(name)

        const productPrice = document.createElement('div')
        productPrice.classList.add('product-price', 'right')
        product.appendChild(productPrice)

        const price = document.createElement('p')
        price.textContent = productItem.price*productItem.quantity+("€")
        parseFloat(price.textContent)
        productPrice.appendChild(price)

        const productType = document.createElement('div')
        productType.classList.add('product-type', 'left')
        product.appendChild(productType)

        const type = document.createElement('p')
        type.textContent = productItem.type
        productType.appendChild(type)

        const productQuantity = document.createElement('div')
        productQuantity.classList.add('quantity', 'right')
        product.appendChild(productQuantity)

        const quantity = document.createElement('p')
        quantity.textContent = (productItem.quantity)+("x")+productItem.price+("€")
        productQuantity.appendChild(quantity)
      })

      const total = this.data.reduce(function(acumulador, producto) {
        return acumulador + (producto.price * producto.quantity);
      }, 0);

      console.log(total)

      this.shadow.getElementById('total').textContent = `${total} €`;
  }
}

customElements.define('order-summary-component', OrderSummary)

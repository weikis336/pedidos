class Orderorder extends HTMLElement {
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
        number: '00000000002',
        total: '180.00',
        date: '13-05-2024 17:09'
      },
      {
        number: '00000000003',
        total: '150.00',
        date: '13-05-2024 17:10'
      }
    ]
  }

  render () {
    this.shadow.innerHTML =
      /* html */`
      <style>
        .filter-page {
          height: 90vh;
          display: flex;
          flex-direction: column;
        }

        .filter-page button {
          height: 1.5rem;
          width: 9rem;
          background: white;
          border: none;
          border-radius: 0.25rem;
          font-size: 0.75rem;
          font-weight: 600;
        }

        .filter-page input {
          height: 1.5rem;
          width: 10rem;
          margin-bottom: 1rem;
        }

        .order-list {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          flex-grow: 1; /* Permite que la lista de orderos crezca para ocupar el espacio disponible */
        }

        .filterer {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: repeat(2, 1fr);
          color: white;
          font-size: 1.25rem;
          margin-bottom: 1rem;
        }

        .order {
          border-top: 1px solid #ffffff;
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

        .order-date {
          font-size: 1rem;
        }

        .see-order {
          margin-top: auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          border: none;
          width: 15rem;
          padding: 0.5rem;
          font-size: 1rem;
          border-radius: 3rem;
          color: black;
          font-weight: 600;
          margin-bottom: 2rem;
        }
      </style>
        <div class="filter-page">
          <div class="filterer">
            <div class="order-name left">
              <input type=text placeholder="Referencia del pedido">
            </div>
            <div class="order-price right">
              <button class="reference-search">
                Buscar por referencia
              </button>
            </div>
            <div class="order-type left">
              <input type="date">
            </div>
            <div class="quantity right">
              <button class="date-search">
                Buscar por fecha
              </button>
            </div>
          </div>
          <div class="order-list">
            </div>
          </div>
        </div>
      `
    const orderList = this.shadow.querySelector('.order-list')

    this.data.forEach(orderItem => {
      const order = document.createElement('div')
      order.classList.add('order')
      orderList.appendChild(order)

      const orderNumber = document.createElement('div')
      orderNumber.classList.add('order-number', 'left')
      order.appendChild(orderNumber)

      const number = document.createElement('p')
      number.textContent = orderItem.number
      orderNumber.appendChild(number)

      const orderPrice = document.createElement('div')
      orderPrice.classList.add('order-price', 'right')
      order.appendChild(orderPrice)

      const price = document.createElement('p')
      price.textContent = orderItem.total + ('€')
      orderPrice.appendChild(price)

      const orderDate = document.createElement('div')
      orderDate.classList.add('order-date', 'left')
      order.appendChild(orderDate)

      const date = document.createElement('p')
      date.textContent = orderItem.date
      orderDate.appendChild(date)

      const orderButton = document.createElement('div')
      orderButton.classList.add('button', 'right')
      order.appendChild(orderButton)

      const button = document.createElement('button')
      button.textContent = ('Ver Pedido')
      orderButton.appendChild(button)
    })
  }
}

customElements.define('order-filterer-component', Orderorder)

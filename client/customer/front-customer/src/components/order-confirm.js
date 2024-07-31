class OrderConfirm extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  connectedCallback () {
    this.render()
  }

  render () {
    this.shadow.innerHTML =
      /* html */`
      <style>
        .content {
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          flex-direction: column;
        }
 
        .title {
          font-size: 1.5rem;
          color: white;
          font-weight: 600;
        }

        .description {
          color: white;
          margin-bottom: 1rem;
        }

        .return-button {
          border: none;
          width: 15rem;
          padding: 0.5rem;
          font-size: 1rem;
          border-radius: 3rem;
          color: black;
          font-weight: 600;
        }
      </style>

      <div class="content">
        <div class="title">
          <p>Pedido realizado con éxito.</p>
        </div>
        <div class="description">
          <p>En breve recibirá un correo con los detalles. La referencia de su pedido es 0000000002</p>
        </div>  
        <button class="return-button">
          Volver a inicio
        </button>
      </div>
      `
  }
}

customElements.define('order-confirm-component', OrderConfirm)

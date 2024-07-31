class Home extends HTMLElement {
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
        .home-buttons {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 1rem;
        }
 
        .home-buttons button {
          border: none;
          width: 15rem;
          padding: 0.5rem;
          font-size: 1rem;
          border-radius: 3rem;
          color: hsla(270, 83%, 36%, 1);
          font-weight: 600;
        }

      </style>

      <div class="home-buttons">
        <button class="new-order">Nuevo pedido</button>
        <button class="previous-orders">Pedidos anteriores</button>
      </div>
      `
  }
}

customElements.define('home-component', Home)

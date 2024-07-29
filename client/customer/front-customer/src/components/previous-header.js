class PreviousHeader extends HTMLElement {
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
      h1 {
        color: white;
        font-size: 1rem;
        margin-left: 1rem;
      }
      </style>

      <div class="title">
        <h1>Pedidos Anteriores</h1>
      </div>

      `
  }
}

customElements.define('previous-header-component', PreviousHeader)

class MainHeader extends HTMLElement {
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
      header{
        align-items: center;
        display: flex;
        justify-content: space-between;
        background-color: black;
        margin-bottom: 2rem;
        align-items: left;
      }
      </style>

      <header>
        <slot>
      </header>

      `
  }
}

customElements.define('main-header-component', MainHeader)

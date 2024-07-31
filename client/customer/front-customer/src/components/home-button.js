class ButtonHome extends HTMLElement {
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
      svg {
        fill: white;
        width: 2rem;
        height: 2rem;
      }
      </style>

      <div class="home-button">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>home</title><path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" /></svg>
      </div>

      `
  }
}

customElements.define('button-home-component', ButtonHome)

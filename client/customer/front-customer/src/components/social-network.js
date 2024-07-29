class SocialNetworks extends HTMLElement {
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

      `
  }
}

customElements.define('social-networks-component', SocialNetworks)

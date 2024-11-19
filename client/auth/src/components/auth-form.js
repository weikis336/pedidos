class Main extends HTMLElement {
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
                body{
                    display: flex;
                    gap: 2rem;
                }
            </style>
            <body>
              <div>
                <form></form>
              </div>
            </body>
        `
  }
}

customElements.define('main-component', Main)

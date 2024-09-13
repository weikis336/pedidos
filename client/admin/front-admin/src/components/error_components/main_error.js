class MainError extends HTMLElement {
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
                main{
                    background-color: #0178D9;
                }
            </style>
            <main class="main">
                <slot></slot>
                <h1>Main Loaded</h1>
            </main>
        `
  }
}

customElements.define('mainerror-component', MainError)

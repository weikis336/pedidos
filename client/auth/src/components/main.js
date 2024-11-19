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
                *{
                    box-sizing: border-box; 
                }
                
                main{
                    display: grid;
                    grid-template-columns: 2fr 4fr;
                    gap: 2rem;
                }
            </style>
            <main>
                <slot></slot>
            </main>
        `
  }
}

customElements.define('main-component', Main)

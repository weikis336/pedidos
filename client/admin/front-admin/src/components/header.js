class Header extends HTMLElement {
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

            
                header{
                    font-family: Roboto, system-ui;
                    align-items: center;
                    display: flex;
                    justify-content: space-between;
                    padding: 1rem 0;
                    background: hsl(240, 6%, 13%);
                    border-radius: 1.2rem;
                    margin-bottom: 0.9rem;
                    
                }
                .items{
                  padding: 2rem;
                }
            </style>
            <header>

                <slot ></slot>
            </header>
        `
  }
}

customElements.define('header-component', Header)

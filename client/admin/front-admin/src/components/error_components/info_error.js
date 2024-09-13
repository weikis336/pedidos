class InfoError extends HTMLElement {
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
              h1,h2,h3,h4,h5,h6, p, span {
                border: 0;
                margin: 0;
                padding: 0;
              }

              .meme{
                display:flex;
                align-items: baseline;
                color: #FFF;
                display: flex;
                padding-top: 7em;
                padding-right: 5%;
                padding-left: 5%; 
                gap: 0,5rem;
              }
                
              .meme-memeicon, .sadicon{ 
                font-size: 150pt;
                font-family:'Segoe UI';
                
              }
              .meme-error, .errortext {
                color: #FFF;
                font-family: 'Segoe UI';
                font-size: 40pt;
              } 
            </style>
            <div class="meme">
            <div class="memeicon"><p class="sadicon">:(</p></div> 
            <div class="error"><h1 class="errortext">Error 404 Page Not found</h1></div>
          </div>
        `
  }
}

customElements.define('infoerror-component', InfoError)

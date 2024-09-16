class MessageModalComponent extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  connectedCallback () {
    document.addEventListener('message', this.handleMessage.bind(this))
    this.render()
  }

  handleMessage (event) {
    const alertBox = this.shadow.querySelector('.messageBox')
    alertBox.classList.add('active')

    this.shadow.querySelector('p').textContent = event.detail.message

    setTimeout(() => {
      alertBox.classList.remove('active')
    }, 3000)
  }

  render () {
    this.shadow.innerHTML =
      /* html */`
            <style>


                .messageBox {
                  flex-direction:column;
                  font-family: Roboto, system-ui;
                  position: fixed;
                  background-color: #d0d0d0;
                  box-sizing: border-box;
                  border-radius: 0.4rem;
                  padding:0.8rem;
                  border: 0.02rem solid #ccc;
                  gap: 0.6rem;
                  z-index: 1000;
                  opacity: 0;
                  visibility: hidden;
                  transition: opacity 0.3s;
                  bottom: 2rem; 
                  right: 2rem; 
                }

                .messageBox.active{
                  opacity: 1;
                  visibility: visible;
                }
                  
                .confirmation-dialog {
            background-color: hsla(0, 0%, 100%, 50%);
            border: none;
            border-radius: 8px;
            padding: 20px;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
          }
            </style>
           <section>
            <div class="messageBox">
              <div class="confirmation-dialog">
                <p></p>
              </div>
                <div class="barTimerFooter">
                <p class=bar></p>
                </div>
              </div>
            </section>
        `
  }
}

customElements.define('message-modal-componente', MessageModalComponent)

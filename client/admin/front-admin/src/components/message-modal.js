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
    const messageBox = this.shadow.querySelector('.alert')
    messageBox.classList.add('active')

    const alertHeader = this.shadow.querySelector('.alert-header')
    alertHeader.classList.add(event.detail.type)

    this.shadow.querySelector('.message').textContent = event.detail.message

    setTimeout(() => {
      messageBox.classList.remove('active')
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
                  
                .text h1 {
                  margin: 0;
                  padding: 0;
                }
            </style>
           <section>
            <div class="messageBox">
                <div class="text">
                  <h1>Cambios Guardados Correctamente</h1>
                <div class="barTimerFooter">
                <p class=bar></p>

                </div>
              </div>
            </section>
        `
  }
}

customElements.define('message-modal-componente', MessageModalComponent)

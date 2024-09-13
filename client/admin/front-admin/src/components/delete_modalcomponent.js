class DeleteModalComponent extends HTMLElement {
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


                .deleteBox {
                  flex-direction:column;
                  font-family: Roboto, system-ui;
                  position: fixed;
                  top: 50%;
                  left: 50%;
                  transform: translate(-50%, -50%);
                  background-color: #d0d0d0;
                  box-sizing: border-box;
                  border-radius: 0.3rem;
                  padding:15px;
                  border: 1px solid #ccc;
                  gap: 0.6rem;
                  z-index: 1000;
                  opacity: 0;
                  visibility: hidden;
                  transition: opacity 0.3s;
                }

                .deleteBox.active{
                  opacity: 1;
                  visibility: visible;
                }
                  
                .text h1 {
                  margin: 0;
                  padding: 0;
                }

                .buttonsBox {
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                  margin-top: auto;
                  padding: 5px 10px;
                  border-radius: 0.6rem;
                }

                .buttonsBox button {
                  cursor: pointer;
                  border-radius:0.3rem;
                  box-shadow: 0.05rem 0.04rem 0.06rem 0 hsl(240, 4%, 62%);
                }
                .si{
                  background-color: #b5ff7f;
                }
                .no{
                  background-color:red;
                }
            </style>
           <section>
            <div class="deleteBox">
                <div class="text">
                  <h1>Aceptas los cambios</h1>
                
                </div>
                <div class="buttonsBox">
                  <button class="si">SI</button>
                  <button class="no">NO</button>
                </div>
              </div>
            </section>
        `

    this.shadow.querySelector('.no').addEventListener('click', () => {
      this.shadow.querySelector('.deleteBox').classList.remove('active')
    })
  }
}

customElements.define('delete-modal-componente', DeleteModalComponent)

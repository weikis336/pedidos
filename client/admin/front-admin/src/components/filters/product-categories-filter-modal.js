import { store } from '../../redux/store.js'
import { applyFilter } from '../../redux/crud-slice.js'
class ProductCategoryFilterModal extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.endpoint = `${import.meta.env.VITE_API_URL}/api/admin/product-categories`
  }

  connectedCallback () {
    document.addEventListener('showFilterModal', this.handleShowFilterModal.bind(this))
    this.render()
  }

  handleShowFilterModal (event) {
    this.shadow.querySelector('.filter').classList.add('active')
  }

  render () {
    this.shadow.innerHTML =
      /* html */`
            <style>
                .filter {
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

                .filter.active{
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
                  padding: 0.4rem 0.8rem;
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

                form{
                  display: grid;
                  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                  gap: 1.2rem;
                }

                .form-element{
                  display: flex;
                  flex-direction: column;
                  gap: 0.5rem;
                }

                .form-element-input input{
                  padding: 0.2rem 0.5rem  ;
                  color: #433342;
              }
            </style>
           <section>
            <div class="filter">
                <div class="text">
                  <h1>Filtrar la tabla</h1>
                </div>
                <form>
                  <div class="form-element">
                    <div class="form-element-label">
                      <label>Nombre</label>
                    </div>
                    <div class="form-element-input">
                      <input type="text" name="name">
                    </div>
                  </div>
                  <div class="form-element">
                    <div class="form-element-label">
                      <label>Email</label>
                    </div>
                    <div class="form-element-input">
                      <input type="text" name="email">
                    </div>
                  </div>
                </form>

                <div class="buttonsBox">
                  <button class="si">SI</button>
                  <button class="no">NO</button>
                </div>
              </div>
            </section>
        `

    this.shadow.querySelector('.no').addEventListener('click', () => {
      this.shadow.querySelector('.filter').classList.remove('active')
    })

    this.shadow.querySelector('.si').addEventListener('click', async (event) => {
      event.preventDefault()
      const form = this.shadow.querySelector('form')
      const formData = new FormData(form)
      const formDataJson = {}

      for (const [key, value] of formData.entries()) {
        formDataJson[key] = value !== '' ? value : null
      }

      const queryString = Object.entries(formDataJson).map(([key, value]) => {
        return `${key}=${value}`
      }).join('&')

      store.dispatch(applyFilter(queryString))
      form.reset()
      this.shadow.querySelector('.filter').classList.remove('active')
    })
  }
}

customElements.define('product-category-filter-modal-componente', ProductCategoryFilterModal)

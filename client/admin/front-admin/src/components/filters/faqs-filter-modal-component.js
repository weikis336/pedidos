import { store } from '../../redux/store.js'
import { applyFilter } from '../../redux/crud-slice.js'

class FaqsFilterModal extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  connectedCallback () {
    document.addEventListener('showFilterModal', this.handleShowFilterModal.bind(this))
    this.render()
  }

  handleShowFilterModal (event) {
    this.shadow.querySelector('.filter-modal').classList.add('active')
  }

  render () {
    this.shadow.innerHTML =
      /* html */ `
        <style>
          *{
            box-sizing: border-box;
          }

          .filter-modal{
            align-items: center;
            background-color: hsla(0, 0%, 0%, 50%);
            display: flex;
            height: 100vh;
            justify-content: center;
            position: fixed;
            left: 0;
            top: 0;
            width: 100%;
            z-index: 5000;
            transition: opacity 0.3s;
            opacity: 0.5;
            visibility: hidden;
          }

          .filter-modal.active{
            opacity: 1;
            visibility: visible;
          }
          .filter-form {
            background-color: hsla(0, 0%, 100%, 50%);
            border: none;
            border-radius: 5px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            padding: 1rem;
            z-index: 1000;
            width: 20rem;
            box-shadow: 3px 3px 2px 1px rgba(0, 0, 0, 0.1), -3px 3px 2px 1px rgba(0, 0, 0, 0.1)

          } 
          
          .form-group {
            padding-left: 0.5rem;
            margin-bottom: 1rem
          }
          #filter-name {
            background-color: hsla(0, 0%, 100%, 50%);
            border: none;
            width: 75%
          }
          #filter-email {
            background-color: hsla(0, 0%, 100%, 50%);
            border: none;
            width: 80%
          }

          .form-actions{
            padding: 0 0.5rem;
            display:flex;
            justify-content: space-between
          }

          .form-actions button {
            background-color: #222260; 
            color: white;        
            border: none; 
            border-radius: 2px; 
            cursor: pointer; 
            font-size: 15px; 
            transition: background-color 0.3s ease
          }

          .form-actions button:hover {
            background-color: #5D5DAE; 
          }

          .apply-filter {
            border: none;
            min-width: 5rem;
           
          }

          

          .reset-filter {
            border: none;
            width: 5rem;
          }

        </style>

        <div class="filter-modal">
          <form class="filter-form">
            <div class="form-group">
              <label for="filter-name">Título:</label>
              <input type="text" id="filter-name" name="title">
            </div>
            
            <div class="form-actions">
              <button type="button" class="apply-filter">Aplicar</button>
              <button type="reset" class="reset-filter">Cancelar</button>
            </div>
          </form>
        </div>
    `

    this.shadow.querySelector('.reset-filter').addEventListener('click', () => {
      this.shadow.querySelector('.filter-modal').classList.remove('active')
    })

    this.shadow.querySelector('.apply-filter').addEventListener('click', (event) => {
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

      this.shadow.querySelector('.filter-modal').classList.remove('active')
      form.reset()
    })
  }
}

customElements.define('faqs-filter-modal-component', FaqsFilterModal)

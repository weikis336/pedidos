import isEqual from 'lodash-es/isEqual'
import { store } from '../redux/store.js'
import { refreshTable } from '../redux/crud-slice.js'

class Form extends HTMLElement {
  constructor () {
    super()
    this.unsubscribe = null
    this.formElementData = null
    this.shadow = this.attachShadow({ mode: 'open' })
    this.endpoint = `${import.meta.env.VITE_API_URL}/api/admin/users`
  }

  connectedCallback () {
    this.unsubscribe = store.subscribe(() => {
      const currentState = store.getState()

      if (currentState.crud.formElement && !isEqual(this.formElementData, currentState.crud.formElement.data)) {
        this.formElementData = currentState.crud.formElement.data
        this.showElement(this.formElementData)
      }
    })

    this.render()
  }

  render () {
    this.shadow.innerHTML =
      /* html */`
            <style>
                *{
                    box-sizing: border-box; 
                }
                input, label, li{
                    color: hsl(208, 100%, 97%);
                }

                ul{
                    list-style: none;
                    margin: 0;
                    padding: 0;
                }
                
                .form{
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                    font-family: Roboto, system-ui;
                }

                .form-header{
                    align-items: center;
                    background-color: hsl(240, 6%, 41%);
                    border-radius: 0.3rem;
                    display: flex;
                    height: 2.2rem;
                    justify-content: space-between;
                }

                .form-header-tabs ul{
                    background-color: hsl(240, 8%, 25%);
                    display: flex;
                    align-items: center;
                }

                .form-header-tabs li {
                    background-color: hsl(240, 8%, 25%);
                    display: flex;
                    height: 2.2rem;
                    margin:0;
                    padding: 0.3rem;
                }

                .form-header-buttons ul{
                    align-items: center;
                    display: flex;
                    gap: 0.5rem;
                    padding: 0 0.5rem;
                }

                .form-header-buttons svg{
                    fill: hsl(0, 0%, 100%);
                    height: 1.8rem;
                    width: 1.8rem;
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
                    padding: 0.2rem 0.5rem;
                    width: 100%;
                    color: #433342;

                }
            </style>
            <section class="form">
                <div class="form-header">
                    <div class="form-header-tabs">
                        <ul>
                            <li>General</li>
                        </ul>
                    </div>
                    <div class="form-header-buttons">
                        <ul>
                            <li class="reset-button">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19.36,2.72L20.78,4.14L15.06,9.85C16.13,11.39 16.28,13.24 15.38,14.44L9.06,8.12C10.26,7.22 12.11,7.37 13.65,8.44L19.36,2.72M5.93,17.57C3.92,15.56 2.69,13.16 2.35,10.92L7.23,8.83L14.67,16.27L12.58,21.15C10.34,20.81 7.94,19.58 5.93,17.57Z" /></svg>
                            </li>
                            <li class="save-button">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15,9H5V5H15M12,19A3,3 0 0,1 9,16A3,3 0 0,1 12,13A3,3 0 0,1 15,16A3,3 0 0,1 12,19M17,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V7L17,3Z" /></svg>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="form-body">
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
                                <input type="email" name="email">
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        `
    this.renderSaveButton()
    this.renderResetButton()
  }

  renderResetButton () {
    this.shadow.querySelector('.reset-button').addEventListener('click', async (event) => {
      const form = this.shadow.querySelector('form')
      form.reset()
      this.shadow.querySelector("[name='id']").value = ''
    })
  }

  renderSaveButton () {
    this.shadow.querySelector('.save-button').addEventListener('click', async (event) => {
      event.preventDefault()

      const form = this.shadow.querySelector('form')

      const formData = new FormData(form)

      const formDataJson = {}

      for (const [key, value] of formData.entries()) {
        formDataJson[key] = value !== '' ? value : null
      }
      const method = formDataJson.id ? 'PUT' : 'POST'
      const endpoint = formDataJson.id ? `${this.endpoint}/${formDataJson.id}` : this.endpoint

      try {
        const endpoint = `${import.meta.env.VITE_API_URL}/api/admin/users`

        const response = await fetch(endpoint, {
          method,
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formDataJson)
        })

        store.dispatch(refreshTable(this.endpoint))
        this.shadow.querySelector("[name='id']").value = ''
      } catch (error) {
        console.error(error)
      }

      document.dispatchEvent(new CustomEvent('message', {
        detail: {
          message: 'Datos guardados correctamente',
          type: 'success'
        }
      }))
    })
  }

  showElement = async element => {
    Object.entries(element).forEach(([key, value]) => {
      if (this.shadow.querySelector(`[name="${key}"]`)) {
        this.shadow.querySelector(`[name="${key}"]`).value = value
      }
    })
  }
}

customElements.define('form-component', Form)

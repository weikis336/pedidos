import isEqual from 'lodash-es/isEqual'
import { store } from '../../redux/store.js'
import { refreshTable } from '../../redux/crud-slice.js'

class ProductsForm extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.unsubscribe = null
    this.formElementData = null
    this.endpoint = `${import.meta.env.VITE_API_URL}/api/admin/products`
  }

  connectedCallback () {
    this.unsubscribe = store.subscribe(() => {
      const currentState = store.getState()

      if (currentState.crud.formElement && !isEqual(this.formElementData, currentState.crud.formElement.data)) {
        this.formElementData = currentState.crud.formElement.data
        this.showElement(this.formElementData)

        if (this.formElementData) {
          this.showElement(this.formElementData)
        } else {
          this.resetForm()
        }
      }
    })

    this.render()
  }

  render () {
    this.shadow.innerHTML =
      /* html */ `
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
                .form-header-tabs {
                    display: flex;
                    cursor: pointer;
                }

                .form-header-tabs ul{
                    background-color: hsl(240, 8%, 25%);
                    display: flex;
                    align-items: center;
                    cursor: pointer;
                }

                .form-header-tabs li {
                    background-color: hsl(240, 8%, 25%);
                    display: flex;
                    align-items: center;
                    height: 2.2rem;
                    margin:0;
                    padding: 0.3rem;
                }
                .form-header-tabs ul li.active{
                  background-color: hsl(200, 100%, 45%);
                  color: hsl(0, 0%, 100%);
                  cursor: pointer;
                }

                .form-header-buttons ul{
                    align-items: center;
                    display: flex;
                    gap: 0.5rem;
                    padding: 0 0.5rem;
                    cursor: pointer;
                }

                .form-header-buttons svg{
                    fill: hsl(0, 0%, 100%);
                    height: 1.8rem;
                    width: 1.8rem;
                }
                .tab-content{
                  display: none;
                  
                }

                .tab-content.active{
                  display: grid;
                  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); 
                  gap: 1rem; 
                  flex-direction: column;
                }

                
                .form-element{
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                    width: fit-content;
                }

                .form-element-input input{
                    padding: 0.2rem 0.5rem;
                    color: #433342;
                    background-color:hsl(240, 6%, 60%);
                }
                .form-element-input select{
                    padding: 0.2rem 0.5rem;
                    color: #433342;
                    background-color:hsl(0, 0%, 92%);
                }
                .form-element-input option{
                    color: #433342;
                    background-color:hsl(0, 0%, 92%);
                    border-radius: 0.3rem;
                }
                .validation-errors{
                  background-color: hsl(0, 93%, 66%);
                  display: none;
                  margin-bottom: 1rem;
                  padding: 1rem;
                }

                .validation-errors.active{
                  display: block;
                }

                .validation-errors ul{
                  margin: 0;
                  padding: 0;
                }

                .validation-errors li{
                  color: hsl(0, 0%, 100%);
                  font-weight: 600;
                }

              .form-element-input input.error{
                border-bottom: 2px solid hsl(0, 93%, 66%);
               }
        </style>

        <section class="form">
          <div class="form-header">
            <div class="form-header-tabs">
              <ul>
                <li class="tab active" data-tab="general">General</li>
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
            <div class="validation-errors">
              <ul></ul>
            </div>
            <form>
              <div class="tab-content active" data-tab="general">
                <input type="hidden" name="id">
                  <div class="form-element">
                      <div class="form-element-label">
                        <label for="categoryID">CategoriaProducto</label>
                      </div>
                    
                    <div class="form-element-input">
                      <select name="productCategoryId"><option></option></select>
                    </div>
                  </div>
                  <div class="form-element">
                    <div class="form-element-label">
                      <label>Nombre</label>
                    </div>
                    <div class="form-element-input">
                      <input type="string" name="name">
                    </div>
                  </div>
                  <div class="form-element">
                    <div class="form-element-label">
                      <label>Referencia</label>
                    </div>
                    <div class="form-element-input">
                      <div div class="form-element-input">
                        <input type="string" name="reference">
                      </div>
                    </div>
                  </div>
                  <div class="form-element">
                  <div class="form-element-label">
                    <label>precios</label>
                  </div>
                  <div class="form-element-input">
                    <div div class="form-element-input">
                      <input type="number" name="basePrice">
                    </div>
                  </div>
                </div>
                  <div class="form-element">
                    <div class="form-element-label">
                      <label> Unidades</label>
                    </div>
                    <div class="form-element-input">
                      <input type="number" name="units">
                    </div>
                  </div>
                  <div class="form-element">
                    <div class="form-element-label">
                      <label> UnidadesMedida</label>
                    </div>
                    <div class="form-element-input">
                      <select type="string" name="measurementUnit">
                        <option value="gr">Gr</option>
                        <option value="ml">Ml</option>
                        <option value="ud">Ud</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-element">
                    <div class="form-element-label">
                      <label> Medida</label>
                    </div>
                    <div class="form-element-input">
                      <input type="number" name="measurement">
                    </div>
                  </div>
                  <div class="form-element">
                    <div class="form-element-label">
                      <label>Visible</label>
                    </div>
                    <div class="form-element-input">
                      <select name="visible">
                        <option value="true" name="visible">Sí</option>
                        <option value="false" name="visible">No</option>
                      </select>
                    </div>
                  </div>
                
              </div>
            </form>
          </div>
        </section>
        `
    this.renderSaveButton()
    this.renderResetButton()
    this.renderTabsButton()
    this.getProductCategories()
  }

  async getProductCategories (selectedCategoryId = null) {
    console.log('Mensaje predeterminado')
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/admin/product-categories`)
    this.productCategories = await response.json()

    const select = this.shadow.querySelector('[name="productCategoryId"]')

    select.innerHTML = ''

    this.productCategories.rows.forEach(category => {
      if (category.name) {
        const option = document.createElement('option')
        option.value = category.id
        option.textContent = category.name
        if (selectedCategoryId && category.id === selectedCategoryId) {
          option.selected = true
        }

        select.appendChild(option)
      }
    })
  }

  renderResetButton () {
    this.shadow.querySelector('.reset-button').addEventListener('click', async (event) => {
      this.resetForm()
    })
  }

  renderTabsButton () {
    this.shadow.querySelector('.form').addEventListener('click', async (event) => {
      if (event.target.closest('.tab')) {
        const tab = event.target.closest('.tab')

        if (!tab.classList.contains('active')) {
          this.shadow.querySelector('.tab.active').classList.remove('active')
          tab.classList.add('active')
          this.shadow.querySelector('.tab-content.active').classList.remove('active')
          this.shadow.querySelector(`.tab-content[data-tab="${tab.dataset.tab}"]`).classList.add('active')
        }
      }
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
        const response = await fetch(endpoint, {
          method,
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formDataJson)
        })

        if (response.status === 500 || response.status === 422) {
          throw response
        }

        if (response.status === 200) {
          document.dispatchEvent(new CustomEvent('message', {
            detail: {
              message: 'Datos guardados correctamente'
            }
          }))

          store.dispatch(refreshTable(this.endpoint))
          this.resetForm()
        }
      } catch (error) {
        const data = await error.json()

        if (error.status === 500) {
          document.dispatchEvent(new CustomEvent('message', {
            detail: {
              message: data.message
            }
          }))
        }

        if (error.status === 422) {
          this.shadow.querySelector('.validation-errors').classList.add('active')
          const errorList = this.shadow.querySelector('.validation-errors ul')
          errorList.innerHTML = ''

          this.shadow.querySelectorAll('input.error').forEach(input => {
            input.classList.remove('error')
          })

          data.message.forEach(errorMessage => {
            this.shadow.querySelector(`[name='${errorMessage.path}']`).classList.add('error')
            const li = document.createElement('li')
            li.textContent = errorMessage.message
            errorList.appendChild(li)
          })
        }
      }
    })
  }

  resetForm = () => {
    this.shadow.querySelector('.validation-errors').classList.remove('active')
    const errorList = this.shadow.querySelector('.validation-errors ul')
    errorList.innerHTML = ''

    this.shadow.querySelectorAll('input.error').forEach(input => {
      input.classList.remove('error')
    })

    this.shadow.querySelector('form').reset()
    this.shadow.querySelector("[name='id']").value = ''
  }

  showElement = async element => {
    this.resetForm()
    if (element.productCategoryId) {
      await this.getProductCategories(element.productCategoryId)
    } else {
      await this.getProductCategories()
    }
    Object.entries(element).forEach(([key, value]) => {
      if (this.shadow.querySelector(`[name="${key}"]`)) {
        const formElement = this.shadow.querySelector(`[name="${key}"]`)
        if (formElement.tagName.toLowerCase() === 'input') {
          if (formElement.type === 'radio') {
            const radioButton = this.shadow.querySelector(`[name="${key}"][value="${value}"]`)
            if (radioButton) {
              radioButton.checked = true
            }
          } else if (formElement.type === 'checkbox') {
            formElement.checked = !!value
          } else {
            formElement.value = value
          }
        }
        if (formElement.tagName.toLowerCase() === 'select') {
          formElement.querySelectorAll('option').forEach(option => {
            if (option.value === value) {
              option.selected = true
            }
          })
        }
        if (formElement.tagName.toLowerCase() === 'textarea') {
          formElement.value = value
        }
      }
    })
  }
}

customElements.define('products-form-component', ProductsForm)

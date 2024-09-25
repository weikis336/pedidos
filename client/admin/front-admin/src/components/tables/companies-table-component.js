import isEqual from 'lodash-es/isEqual'
import { store } from '../../redux/store.js'
import { showFormElement, applyFilter } from '../../redux/crud-slice.js'

class CompaniesTable extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.data = []
    this.unsubscribe = null
    this.endpoint = `${import.meta.env.VITE_API_URL}/api/admin/users`
    this.page = 1
    this.queryString = null
  }

  async connectedCallback () {
    this.unsubscribe = store.subscribe(async () => {
      const currentState = store.getState()

      if (currentState.crud.tableEndpoint && isEqual(this.endpoint, currentState.crud.tableEndpoint)) {
        await this.loadData()
        await this.render()
      }

      if (!isEqual(this.queryString, currentState.crud.queryString)) {
        this.queryString = currentState.crud.queryString
        await this.loadData()
        await this.render()

        if (this.queryString) {
          const filterButton = this.shadow.querySelector('.filter-button')
          const filterCancelButton = this.shadow.querySelector('.filter-cancel-button')

          filterButton.classList.remove('active')
          filterCancelButton.classList.add('active')
        }
      }
    })
    await this.loadData()
    await this.render()
  }

  async loadData () {
    const endpoint = this.queryString ? `${this.endpoint}?${this.queryString}` : this.endpoint
    const response = await fetch(endpoint)
    this.data = await response.json()
  }

  async render () {
    this.shadow.innerHTML =
      /* html */`
              <style>
                *{
                    box-sizing: border-box; 
                }

                span, li{
                    color: hsl(208, 100%, 97%);
                }

                ul{
                    list-style: none;
                    margin: 0;
                    padding: 0;
                    list-style-type: none;

                }
                
                .table {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                    font-family: Roboto, system-ui;
                }


                .table-header{
                    background-color: hsl(240, 6%, 41%);
                    border-radius: 0.3rem;
                    padding: 0.2rem 0.5rem;
                }

                .table-header-buttons ul{
                    display: flex;
                    gap: 0.5rem;
                }

                .table-header-buttons li {
                    align-items: center;
                    height: fit-content;
                    width: fit-content;
                }

                .table-header svg{
                    fill: hsl(0, 0%, 100%);
                    height: 1.8rem;
                }
                .table-header-filter-button, .table-header-filter-cancel-button {
                  display: none;
                  background: none;
                  border: none;
                  cursor: pointer;
                  padding: 0;
                }

                .table-header-filter-button.active, .table-header-filter-cancel-button.active{
                  display: block;
                }

                .table-content {

                  display: flex;
                  flex-direction: column;
                  gap: 0.8rem;
                  padding: 0.5rem 1rem;
                  overflow-y: auto;
                  height: 40rem;
                 
                }
                .table-content::-webkit-scrollbar{
                  background-color: hsl(240, 6%, 41%);
                  width:0.75rem;
                }
                .table-content::-webkit-scrollbar-thumb{
                  background-color: hsl(240, 6%, 13%);
                }
                .table-body{
                    align-items: center;
                    display: flex;
                    flex-direction: column;
                    padding: 0rem;
                    width: fit-content;
                }
                .table-register{
                    background-color: hsl(240, 8%, 25%);
                    width: 80%; 
                    border-radius: 0.75rem;
                }

                .table-register-buttons {
                    align-items: center;
                    background-color: hsl(240, 6%, 41%);
                    display: flex;
                    gap: 0.5rem;
                    justify-content: flex-end;
                    padding: 0.2rem 0.5rem;
                    border-radius: 0.25rem;
                    
                }
                .table-register-buttons li {
                    list-style: none;
                    margin: 0;
                    padding: 0;
                    list-style-type: none;
                }


                .table-register-buttons svg{
                    fill: hsl(0, 0%, 100%);
                    height: 1.5rem;
                    width: 1.5rem;
                }

                .table-register-data{
                    padding: 0.6rem;

                }

                .table-register-data ul{
                    display: flex;
                    flex-direction: column;
                    gap: 0.2rem;
                }

                .tablecontent {
                  display: flex;
                  flex-direction: column;
                  gap: 0.2rem;
                  padding: 0.2rem 0.5rem;
                }
                .table-svg{
                    fill: hsl(0, 0%, 100%);
                    height: 1.5rem;
                    width: 1.5rem;
                }
                .table-footer{
                align-items: center;
                display: flex;
                justify-content: space-between;
                }

                .table-info{
                    background-color: hsl(0, 0%, 100%);
                    display: flex;
                    justify-content: space-between;
                    width: 100%;  
                    padding: 0.5rem;
                    border-radius: 0.75rem;
                }
                .table-info-text{
                  display: flex;
                  align-items: center;
                  width: fit-content;
                  height: fit-content;
                }
                .table-info p{
                    color: hsl(0, 0%, 29%);   
                    font-weight: 700;
                    margin: 0;
                    font-size: 10pt;
                    padding: 0rem;
                    
                }
                .table-info-page-buttons{
                  align-items: center;
                  display: flex;
                  gap: 0.35rem;
                  width: fit-content;

                }
                .table-info{
                    background-color: hsl(0, 0%, 100%);
                    display: flex;
                    justify-content: space-between;
                    padding: 0.5rem;
                    width: 100%;  
                }

                .table-info p{
                    color: hsl(0, 0%, 29%);   
                    font-weight: 700;
                    margin: 0;
                }
                .table-page-buttons{
                  align-items: center;
                  display: flex;
                  gap: 0.5rem;
                }

                .table-info-page-button{
                  cursor: pointer;
                  fill: hsl(225, 63%, 65%);
                  height: 1.3rem;
                  width: 1.3rem;
                }
                .table-page-button{
                  cursor: pointer;
                  fill: hsl(225, 63%, 65%);
                  height: 1.5rem;
                  width: 1.5rem;
                }

                .table-info-current-page{
                  align-items: center;
                  display: flex;
                  height: 1.5rem;
                  width: 3rem;
                }
                .current-page{
                  align-items: center;
                  display: flex;
                  height: 1.5rem;
                  width: 4rem;
                }

                .table-info-current-page input{
                  border: none;
                  border-radius: 0.5rem;
                  color: hsl(225, 63%, 65%);
                  font-weight: 600;
                  outline: none;
                  text-align: center;
                  width: 100%;
                }
                .current-page input{
                  border: none;
                  border-radius: 0.5rem;
                  color: hsl(225, 63%, 65%);
                  font-weight: 600;
                  outline: none;
                  text-align: center;
                  width: 100%;
                }

                .table-info-current-page label{
                  border: 1px solid  hsl(225, 63%, 65%);
                  border-radius: 0.5rem;
                  display: flex;
                  gap: 0.2rem;
                  padding: 0 0.2rem;
                }
                .current-page label{
                  border: 1px solid  hsl(225, 63%, 65%);
                  border-radius: 0.5rem;
                  display: flex;
                  gap: 0.2rem;
                  padding: 0 0.2rem;
                }

                .table-info-current-page button{
                  background-color: transparent;
                  border: none;
                  cursor: pointer;
                  outline: none;
                  padding: 0;
                }
                .current-page button{
                  background-color: transparent;
                  border: none;
                  cursor: pointer;
                  outline: none;
                  padding: 0;
                }

                .table-info-current-page svg{
                  fill: hsl(225, 63%, 65%);
                  width: 1.5rem;
                }
                input[type="number"]::-webkit-outer-spin-button,
                input[type="number"]::-webkit-inner-spin-button {
                  -webkit-appearance: none;
                  margin: 0;
                }
                .current-page svg{
                  fill: hsl(225, 63%, 65%);
                  width: 1.5rem;
                }
            </style>

            <section class="table">
              <div class="table-header">
                <div class="table-header-buttons">
                  <ul>
                    <li class="table-header-filter-button active">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14,12V19.88C14.04,20.18 13.94,20.5 13.71,20.71C13.32,21.1 12.69,21.1 12.3,20.71L10.29,18.7C10.06,18.47 9.96,18.16 10,17.87V12H9.97L4.21,4.62C3.87,4.19 3.95,3.56 4.38,3.22C4.57,3.08 4.78,3 5,3V3H19V3C19.22,3 19.43,3.08 19.62,3.22C20.05,3.56 20.13,4.19 19.79,4.62L14.03,12H14Z" /></svg>
                    </li>
                    <li class="table-header-filter-cancel-button">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.76,20.83L17.6,18L14.76,15.17L16.17,13.76L19,16.57L21.83,13.76L23.24,15.17L20.43,18L23.24,20.83L21.83,22.24L19,19.4L16.17,22.24L14.76,20.83M12,12V19.88C12.04,20.18 11.94,20.5 11.71,20.71C11.32,21.1 10.69,21.1 10.3,20.71L8.29,18.7C8.06,18.47 7.96,18.16 8,17.87V12H7.97L2.21,4.62C1.87,4.19 1.95,3.56 2.38,3.22C2.57,3.08 2.78,3 3,3V3H17V3C17.22,3 17.43,3.08 17.62,3.22C18.05,3.56 18.13,4.19 17.79,4.62L12.03,12H12Z" /></svg>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="table-content"></div>
              <div class="table-footer">
                <div class="table-info">
                  <div class="table-info-text">
                    <p>
                      ${this.data.count} ${this.data.count === 1 ? 'registro' : 'registros'} en total, mostrando ${this.data.meta.size} por página
                    </p>  
                  </div>                 
                  <div class="table-info-page-buttons">
                    <div class="table-info-page-button" data-page="1">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.41,7.41L17,6L11,12L17,18L18.41,16.59L13.83,12L18.41,7.41M12.41,7.41L11,6L5,12L11,18L12.41,16.59L7.83,12L12.41,7.41Z" /></svg>
                    </div>  
                    <div class="table-info-page-button" data-page="${this.data.meta.currentPage > 1 ? parseInt(this.data.meta.currentPage) - 1 : 1}">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>chevron-left</title><path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" /></svg>                     
                    </div>  
                    <div class="table-info-current-page">
                      <label>
                        <input type="number" value="${this.data.meta.currentPage}"> 
                        <button class="go-to-page">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4,10V14H13L9.5,17.5L11.92,19.92L19.84,12L11.92,4.08L9.5,6.5L13,10H4Z" /></svg>
                        </button>
                      </label>
                    </div>
                    <div class="table-info-page-button" data-page="${parseInt(this.data.meta.currentPage) + 1}">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>chevron-right</title><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                    </div>  
                    <div class="table-info-page-button" data-page="${this.data.meta.pages}">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>chevron-double-right</title><path d="M5.59,7.41L7,6L13,12L7,18L5.59,16.59L10.17,12L5.59,7.41M11.59,7.41L13,6L19,12L13,18L11.59,16.59L16.17,12L11.59,7.41Z" /></svg>                      
                    </div>  
                  </div>
                </div>                 
              </div>  
            </section>
        `

    const table = this.shadow.querySelector('.table-content')

    this.data.rows.forEach(element => {
      const tableBody = document.createElement('div')
      tableBody.classList.add('table-body')
      table.appendChild(tableBody)

      const tableRegister = document.createElement('div')
      tableRegister.classList.add('table-register')
      tableBody.appendChild(tableRegister)

      const tableRegisterButtons = document.createElement('div')
      tableRegisterButtons.classList.add('table-register-buttons')
      tableRegister.appendChild(tableRegisterButtons)

      const buttons = document.createElement('ul')
      tableRegisterButtons.appendChild(buttons)

      const editButtons = document.createElement('li')
      editButtons.classList.add('edit-button')
      editButtons.dataset.id = element.id
      editButtons.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>pencil</title><path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" /></svg>'
      tableRegisterButtons.appendChild(editButtons)

      const deleteButton = document.createElement('li')
      deleteButton.classList.add('delete-button')
      deleteButton.dataset.id = element.id
      deleteButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg>'
      tableRegisterButtons.appendChild(deleteButton)

      const tableRegisterData = document.createElement('div')
      tableRegisterData.classList.add('table-register-data')
      tableRegister.appendChild(tableRegisterData)

      const list = document.createElement('ul')
      tableRegisterData.appendChild(list)

      const listName = document.createElement('li')
      listName.classList.add('name')
      listName.textContent = `Nombre: ${element.name}`
      list.appendChild(listName)

      const listEmail = document.createElement('li')
      listEmail.classList.add('email')
      listEmail.textContent = `Email: ${element.email}`
      list.appendChild(listEmail)

      const listCreationDate = document.createElement('li')
      listCreationDate.classList.add('creation-date')
      listCreationDate.textContent = `Fecha de creación: ${element.createdAt}`
      list.appendChild(listCreationDate)

      const listUpdateDate = document.createElement('li')
      listUpdateDate.classList.add('name')
      listUpdateDate.textContent = `Fecha de actualización: ${element.updatedAt}`
      list.appendChild(listUpdateDate)
    })

    this.renderButtons()
  }

  async renderButtons () {
    this.shadow.querySelector('.go-to-page').addEventListener('click', async event => {
      const page = this.shadow.querySelector('.table-info-current-page input').value

      if (!page || page < 1 || page.includes('.') || page.includes(',')) {
        this.shadow.querySelector('.table-info-current-page input').value = this.page
      } else if (page > this.data.meta.pages) {
        document.dispatchEvent(new CustomEvent('message', {
          detail: {
            message: `No se puede acceder a la página ${page}, solo hay ${this.data.meta.pages} ${this.data.meta.pages === 1 ? 'página disponible' : 'páginas disponibles'} `,
            type: 'error'
          }
        }))
        this.shadow.querySelector('.table-info-current-page input').value = this.page
      } else {
        this.page = page
        await this.loadData()
        await this.render()
      }
    })
    this.shadow.querySelector('.table').addEventListener('click', async (event) => {
      if (event.target.closest('.edit-button')) {
        const id = event.target.closest('.edit-button').dataset.id
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/admin/users/${id}`)
        const data = await response.json()

        const formElement = {
          data
        }

        store.dispatch(showFormElement(formElement))
      }
      if (event.target.closest('.delete-button')) {
        const deleteButton = event.target.closest('.delete-button')
        const element = `${this.endpoint}/${deleteButton.dataset.id}`

        document.dispatchEvent(new CustomEvent('showDeleteModal', {
          detail: {
            endpoint: this.endpoint,
            element
          }
        }))
      }

      if (event.target.closest('.table-header-filter-button')) {
        document.dispatchEvent(new CustomEvent('showFilterModal'))
      }

      if (event.target.closest('.table-header-filter-cancel-button')) {
        const filterButton = this.shadow.querySelector('.filter-button')
        filterButton.classList.add('active')
        event.target.closest('.table-header-filter-cancel-button').classList.remove('active')
        store.dispatch(applyFilter(null))
      }

      if (event.target.closest('.table-info-page-button')) {
        const pageButton = event.target.closest('.table-info-page-button')
        this.page = pageButton.dataset.page
        await this.loadData()
        await this.render()
      }
    })
  }
}

customElements.define('companies-table-component', CompaniesTable)

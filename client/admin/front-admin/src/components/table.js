class Table extends HTMLElement {
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

                span, li{
                    color: hsl(208, 100%, 97%);
                }

                ul{
                    list-style: none;
                    margin: 0;
                    padding: 0;
                }
                
                .table {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }

                .table-body{
                    align-items: center;
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                    height: 75vh;
                    max-height: 75vh;
                    overflow-y: auto;
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
                    display: flex;
                    align-items: center;
                    height: fit-content;
                    width: fit-content;
                }

                .table-header svg{
                    fill: hsl(0, 0%, 100%);
                    height: 1.8rem;
                }

                .table-register{
                    background-color: hsl(240, 8%, 25%);
                    width: 80%; 
                }

                .table-register-buttons {
                    background-color: hsl(240, 6%, 41%);
                    padding: 0.2rem 0.5rem;
                }

                .table-register-buttons ul{
                    align-items: center;
                    display: flex;
                    gap: 0.5rem;
                    justify-content: flex-end;
                }

                .table-register-buttons svg{
                    fill: hsl(0, 0%, 100%);
                    height: 1.5rem;
                    width: 1.5rem;
                }

                .table-register-data{
                    padding: 0.5rem;
                }

                .table-register-data ul{
                    display: flex;
                    flex-direction: column;
                    gap: 0.2rem;
                }

                .table-footer{
                    background-color: hsl(240, 6%, 41%);
                    display: flex;
                    justify-content: space-between;
                    padding: 0.5rem;
                }

                .table-svg{
                    fill: hsl(0, 0%, 100%);
                    height: 1.5rem;
                    width: 1.5rem;
                }
            </style>
            <section class="table">
                <div class="table-header">
                    <div class="table-header-buttons">
                        <ul>
                            <li class="filter-button">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14,12V19.88C14.04,20.18 13.94,20.5 13.71,20.71C13.32,21.1 12.69,21.1 12.3,20.71L10.29,18.7C10.06,18.47 9.96,18.16 10,17.87V12H9.97L4.21,4.62C3.87,4.19 3.95,3.56 4.38,3.22C4.57,3.08 4.78,3 5,3V3H19V3C19.22,3 19.43,3.08 19.62,3.22C20.05,3.56 20.13,4.19 19.79,4.62L14.03,12H14Z" /></svg>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="table-body">
                    <div class="table-register">
                        <div class="table-register-buttons">
                            <ul>
                                <li class="edit-button">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" /></svg>
                                </li>
                                <li class="delete-button">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg>                            
                                </li>
                            </ul>
                        </div>
                        <div class="table-register-data">
                            <ul>
                                <li>Nombre: Carlos</li>
                                <li>Email: carlossedagambin@gmail.com</li>
                                <li>Fecha de creación: 2024-04-22</li>
                                <li>Fecha de actualización: 2024-04-22</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="table-footer">
                    <div class="table-footer-info">
                        <span>1 registro en total, mostrando 10 por página</span>
                    </div>
                </div>
            </section>
        `
  }
}

customElements.define('table-component', Table)

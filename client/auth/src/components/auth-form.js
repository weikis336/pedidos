class Main extends HTMLElement {
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
                body{
                    display: flex;
                    gap: 2rem;
                }
            </style>
          <body>
            <div class="auth_form">
              <form action="">
                  <div class="form_message">
                      <div class="auth_message">
                          <div class="header_message">
                              <h1>Elija una contraseña para su cuenta</h1>
                          </div>
                          <div class="requirements_message">
                              <ul>Requisitos de contraseña
                                  <li>8 caracteres como mínimo</li>
                                  <li>Al menos una letra mayuscula</li>
                                  <li>Al menos un número</li>
                              </ul>
                          </div>
                          <div class="input">
                              <div class="passworwd">
                                  <div class="password_title">Contraseña</div>
                                  <div class="user_input"><input type="password" name="Contraseña"></div>
                              </div>
                          </div>
                          <div class="input">
                              <div class="passworwd">
                                  <div class="password_title">Repite la contraseña</div>
                                  <div class="user_input"><input type="password" name="Contraseña"></div>
                              </div>
                          </div>
                          <div class="input">
                              <button class="send_button">Enviar</button>
                          </div>
                  </div>
              </form>
            </div>
          </body>
        `
  }
}

customElements.define('main-component', Main)

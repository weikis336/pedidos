class Login extends HTMLElement {
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
      label {
        color: white;
      }
      
      .login-section {
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      .title {
        color: white;
        font-weight: 600;
      }

      .login-form {
        display: flex;
        flex-direction: column;
      }

      .login-form input {
        border: none;
        border-bottom: 1px solid white;
        background-color: hsla(239, 63%, 50%, 1);
        height: 3vh;
        color: white;
        margin-bottom: 1rem;
      }

      .email-input {
      }

      .email-input:before {
        content: "Email";
      }

      .password-input {
      }

      .send-button {
        decoration: none;
        border: none;
        background-color: hsla(270, 83%, 36%, 1);
        color: white;
        height: 3vh;
        border-radius: 1vh;
      }

      .reminder {
        font-size: 1.5rem;
        color: white;
        font-weight: 600;
      }

      .reminder:hover {
        cursor: pointer;
        color: blue;
      }

    </style>

      <div class="login-section">
        <div class="title">
          <h1>Pedidos</h1>
        </div>
        <div class="login-form">
          <label>Email</label>
          <input type="text" class="email-input">
          <label>Password</label>
          <input type="password" class="password-input">
          <button class="send-button">Enviar</button>
        </div>
        <div class="reminder">
          <p>Olvidé mi contraseña</p>
        </div>
      </div>
      `
  }
}

customElements.define('login-component', Login)

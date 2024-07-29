class MinusPlusButtons extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  connectedCallback () {
    this.productId = this.getAttribute('product-id')
    this.render()
  }

  render () {
    this.shadow.innerHTML =
      /* html */`
      <style>
        .plus-minus-button {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        button {
          display: flex;
          justify-content: center;
          align-items: center;
          width: var(--space-12);
          height: var(--space-12);
          border: 1px solid var(--color-blue-500);
          border-radius: var(--round);
          background-color: var(--color-white);
        }
        button:hover {
          background-color: var(--color-blue-200);
          cursor: pointer;
        }
        button:focus {
          outline: none;
          box-shadow: var(--shadow-focus);
        }
        button:active {
          background-color: var(--color-blue-300);
        }

        .quantity-selector {
          width: 10px;
          border: none;
          background-color: #f0f0f0;

        }

        .quantity-selector.input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
          cursor: none;
        }
      </style>

      <div class="plus-minus-button">
        <button class="minus" aria-label="Decrease by one">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px" fill="white"><title>minus-box</title><path d="M17,13H7V11H17M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z" /></svg>        </button>
        <input class="quantity-selector" type="number" value="0">
        <button class="plus" aria-label="Increase by one">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px" fill="white"><title>plus-box</title><path d="M17,13H13V17H11V13H7V11H11V7H13V11H17M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z" /></svg>        </button>
      </div>
      `

    const plusMinusButton = this.shadow.querySelector('.plus-minus-button')

    plusMinusButton.addEventListener('click', event => {
      if (event.target.closest('.plus')) {
        const quantity = this.shadow.querySelector('.quantity-selector')
        quantity.value = (parseInt(quantity.value) + 1)

        store.dispatch(addProduct({
          id: this.productId,
          quantity: parseInt(quantity.value)
        }))
      }

      if (event.target.closest('.minus')) {
        const quantity = this.shadow.querySelector('.quantity-selector')
        if (quantity.value >= 1) {
          quantity.value = (parseInt(quantity.value) - 1)

          store.dispatch(addProduct({
            id: this.productId,
            quantity: parseInt(quantity.value)
          }))
        }
      }
    })
  }
}

customElements.define('minus-plus-component', MinusPlusButtons)

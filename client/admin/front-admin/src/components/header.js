class Header extends HTMLElement {
    constructor(){
        super()
        this.shadow = this.attachShadow({mode:'open'})
    }

    connectedCallback(){
        this.render()
    }

    render(){
        this.shadow.innerHTML =  
        /*html*/`
            <style>
                *{
                    box-sizing: border-box; 
                }

                header{
                    align-items: center;
                    display: flex;
                    justify-content: space-between;
                    padding: 1rem 0;
                }
            </style>
            <header>
                <slot></slot>
            </header>
        `
    }
}

customElements.define('header-component', Header)
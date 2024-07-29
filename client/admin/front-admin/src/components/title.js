class Title extends HTMLElement {
    constructor(){
        super()
        this.shadow = this.attachShadow({mode:'open'})
        this.title = this.getAttribute('title')
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

                h1{
                    color: hsl(208, 100%, 97%);
                    margin: 0;
                }
            </style>

            <div class="title">
               <h1>${this.title}</h1>
           </div>
        `
    }
}

customElements.define('title-component', Title)
class MemeTextContent extends HTMLElement {
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
              h1,h2,h3,h4,h5,h6, p, span {
                border: 0;
                margin: 0;
                padding: 0;
              }

              .textContainer{
                display: flex;
                color: #FFF;
                flex-direction: column;
                font-family: 'Segoe UI';
                gap: 0.35rem;
                padding-top: 3em;
                padding-right: 25em;
                padding-left: 10em;
                background-color: #0178D9;
              }

              .textContainer-fakeSimtext, .memetext{
                align-items: baseline;
                display: flex;
                font-size: 15pt;
                height: fit-content;
                width: fit-content;
                
              }
              .textContainer, .fakepercentilbox {
                display: flex;
                gap: 1rem;
                justify-content:baseline;
              }
              .textCointer-fakepercentilbox, .fakepercentil, .fakepercentiltext {
                font-size: 17pt;
                height: fit-content;
                width: fit-content;
              }
              .textContainer, .fakestopcode {
                display: flex;
                flex-direction: column;
                gap: 0.2rem;
                justify-content:baseline;
              }
              .textContainer-fakestopcode, .fakecodetext, .fakecode  {
                display: flex;
                font-size: 17pt;
                height: fit-content;
                width: fit-content;
              }
              
            </style>
              <div class="textContainer">
                <div class="fakeSimtext"><h1 class="memetext"> yabohuru pili ruwani jinitubo wa pirubowomewemo wanipo niweweposi tubo ruwesituwarutu. fewe'ruwe dohusitu libomemewelitujiniba sibomowe weruruboru jininabo, wanipo tukiweni fewe 'meme ruwesituwarutu naboru yabohuyabohuru pili ruwani jinitubo wa pirubowomewemo wanipo niweweposi tubo ruwesituwarutu. fewe'ruwe dohusitu libomemewelitujiniba sibomowe weruruboru jininabo, wanipo tukiweni fewe 'meme ruwesituwarutu naboru yabohu</h1></div>
                <div class="fakepercentilbox"><h1 class="fakepercentil">85%</h1><h1 class="fakepercentiltext">Complete</h1></div>
                <div class="fakeinformation"><h1 class="informationtext">For more information about this issue and possible fixes, reload the website.</h1></div>
                <div class="fakesupport"><h1 class="fakesupporttext">If you call a support person, give them this info:</h1></div>
                <div class="fakestopcode"> <h1 class="fakecodetext">Stop code:</h1><h1 class="fakecode">0x00000000</h1></div>
              </div>
        `
  }
}

customElements.define('memeTextContent-component', MemeTextContent)

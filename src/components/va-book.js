import { LitElement, html, css } from '@polymer/lit-element'
import {render} from 'lit-html'
import {anchorRoute, gotoRoute} from './../Router'
import Auth from './../Auth'
import App from './../App'
import UserAPI from './../UserAPI'
import Toast from './../Toast'

customElements.define('va-book', class Book extends LitElement {
  constructor(){
    super()    
  }

  static get properties(){
    return {
      id: {
        type: String
      },
      name: {
        type: String
      },
      author: {
        type: String
      } ,
      image: {
        type: String
      },
      description: {
        type: String
      } ,
      genre: {
        type: String
      },
      summary: {
        type: String
      },
    }
  }

  firstUpdated(){
    super.firstUpdated()
  }

  testHandler(){
    alert("test")
  }

  readHandler(){
    const dialogEl = document.createElement('sl-dialog')
    dialogEl.className = 'book-dialog'
     const dialogContent = html` 
          <style>
              .wrap {
              display: flex;
              }
              .image {
              width: 50%;
              }
              .image img {
              width: 100%;
              }
              .content {
              padding-left: 1em;
              }
              .author span,
              .genre span,
              .summary span{
              text-transform: uppercase;
              font-weight: bold;
              color: var(--brand-color);
              }

        </style>
        <div class="wrap">
             
              <div class="content">
                  <h1>${this.name}</h1>
                  <p class="author"> <span>Author: </span>${this.author}</p>
                  <p class="genre"> <span> Genre: </span> ${this.genre} </p>
                  <p class="summary"> <span> Summary: </span> <br><br>${this.summary} </p>
                  <sl-button @click=${this.addLibHandler.bind(this)} >
                  <sl-icon slot="prefix" name="plus-circle"></sl-icon>
                  Add to Library</sl-button>
              </div>
        </div> 
        ` 
   
     render(dialogContent, dialogEl)

     document.body.append(dialogEl)

     dialogEl.show()

     dialogEl.addEventListener('sl-after-hide', ()=>{
         dialogEl.remove()
     })

  }
  

  async addLibHandler(){    
    try {
      await UserAPI.addBookLib(this.id)
      Toast.show('Book added to myLibrary')
    }catch(err){
      Toast.show(err, 'error')
    }
  }




  render(){    
    return html`
    <style>
     .author{
         font-size:O.9em;
         font-style: italic; 
         opacity: 0.8;
     }
    </style>

    <sl-card>
    <img slot="image" src="${App.apiBase}/images/${this.image}" alt="${this.name}" />
    <h2>${this.name}</h2>
    <h3 class= "author"> by ${this.author}</h3>
    <h4> Genre: ${this.genre}</h4>
    <p>Description: <br><br> ${this.description}</p>
    <sl-button @click=${this.readHandler.bind(this)}>Read</sl-button>
    <sl-icon-button name= "plus-circle" label="Add to Library" @click=${this.addLibHandler.bind(this)}></sl-icon-button>
    </sl-card>
     
    ` 
  }
  
})
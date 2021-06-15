import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'
import UserAPI from './../../UserAPI'
import Toast from './../../Toast'

class MyLibraryView {
  init(){
    document.title = 'My Library'   
    this.myLibrary = null 
    this.render()    
    Utils.pageIntroAnim()
    this.getMyLibrary()
    
  }


async getMyLibrary(){
  try {
    const currentUser = await UserAPI.getUser(Auth.currentUser._id)
    this.myLibrary = currentUser.myLibrary
    console.log(this.myLibrary)
    this.render()
  }catch(err){
    Toast.show(err, 'error')
  }
}

  render(){
    const template = html`
      <va-app-header title="My Library" user="${JSON.stringify(Auth.currentUser)}"></va-app-header>
      <div class="page-content">        
        <h1>My Library</h1>
        <div class="books-grid">
        ${this.myLibrary == null ? html`
        <sl-spinner></sl-spinner>
        ` : html`
          ${this.myLibrary.map(book => html`
            <va-book class="book-card"
              id="${book._id}"
              name="${book.name}"
              author="${book.author}"
              description="${book.description}"
              user="${JSON.stringify(book.user)}"
              image="${book.image}"
              genre="${book.genre}"
              summary="${book.summary}"
            >        
            </va-book>

          `)}
        `}
        </div>
        
      </div>      
    `
    render(template, App.rootEl)
  }
}


export default new MyLibraryView ()
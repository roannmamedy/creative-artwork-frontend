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
      <div class="bn">     
        <h1>Cart</h1>
      </div>
        <div class="artworks-grid">
        ${this.myLibrary == null ? html`
        <sl-spinner></sl-spinner>
        ` : html`
          ${this.myLibrary.map(artwork => html`
            <va-artwork class="artwork-card"
              id="${artwork._id}"
              name="${artwork.name}"
              author="${artwork.author}"
              price="${artwork.price}"
              user="${JSON.stringify(artwork.user)}"
              image="${artwork.image}"
              genre="${artwork.genre}"
              summary="${artwork.summary}"
            >        
            </va-artwork>

          `)}
        `}
        </div>
        <div class="bn">
      <button onclick="alert('Youre all set!');">Buy Now</button>
</div>
      </div> 

    `
    render(template, App.rootEl)
  }
}


export default new MyLibraryView ()
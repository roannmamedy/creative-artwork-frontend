import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'
import UserAPI from './../../UserAPI'
import Toast from '../../Toast'
class GuideView {
  init(){
    document.title = 'Guide'    
    this.render()    
    Utils.pageIntroAnim()
    this.updateCurrentUser()
  }

  async updateCurrentUser(){
    try{
      const updatedUser = await UserAPI.updateUser(Auth.currentUser._id, { newUser: false }, 'json')
      console.log('user updated')
      console.log(updatedUser)
    }catch(err){
      Toast.show(err, 'error')
    }
  }

  render(){
    const template = html`
      <va-app-header title="Guide" user="${JSON.stringify(Auth.currentUser)}"></va-app-header>
      <div class="page-content calign">        
        
        <h2 class="brand-color">Welcome ${Auth.currentUser.firstName}!</h2>
        <p>This is a quick tour to teach you the basics of using Creative Artwork in the most effective way</p>
        
        <div class="guide-step">
          <h4>Find an Artwork with the Filter</h4>
          <img src="/images/filter.png">
        </div>
        
        <div class="guide-step">
          <h4>Add an artwork to your Cart</h4>
          <img src="/images/tocart.png">
        </div>
        
        <div class="guide-step">
          <h4>Go to your Cart</h4>
          <img src="/images/acart.png">
        </div>

        <div class="guide-step">
          <h4>Sell your Artworks</h4>
          <img src="/images/sell.png">
        </div>
        
        <div class="guide-step">
          <h4>Buy Artworks</h4>
          <img src="/images/buy.png">
        </div>

        <sl-button type="primary" @click=${() => gotoRoute('/')}>Okay got it!</sl-button>
        
      </div>      
    `
    render(template, App.rootEl)
  }
}


export default new GuideView()
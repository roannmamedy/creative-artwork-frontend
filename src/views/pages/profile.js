import App from './../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from './../../Router'
import Auth from './../../Auth'
import Utils from './../../Utils'
import moment from 'moment'

class ProfileView {
  init(){
    console.log('ProfileView.init')
    document.title = 'Profile'    
    this.render()    
    Utils.pageIntroAnim()
  }

  render(){
    const template = html`
      <va-app-header title="Profile" user="${JSON.stringify(Auth.currentUser)}"></va-app-header>
      <div class="page-content calign">        
        <div class="profil-content">
        ${Auth.currentUser && Auth.currentUser.avatar ? html`
          <sl-avatar style="--size: 200px; margin-bottom: 1em;" image=${(Auth.currentUser && Auth.currentUser.avatar) ? `${App.apiBase}/images/${Auth.currentUser.avatar}` : ''}></sl-avatar>
        `:html`
        <sl-avatar style="--size: 200px; margin-bottom: 1em;"></sl-avatar>
        `}
        <h2>${Auth.currentUser.firstName} ${Auth.currentUser.lastName}</h2>

        <h3>Email: </h3>
        <p>${Auth.currentUser.email}</p>


        ${Auth.currentUser.bio ? html ` 
          <h3>Bio:</h3>
          <p>${Auth.currentUser.bio}</p>` 
        :html``}
        <p>Updated: ${moment(Auth.currentUser.updatedAt).format('MMMM Do YYYY, @ h:mm a')}</p>
        <sl-button @click=${()=> gotoRoute('/editProfile')}>Edit Profile</sl-button>
      </div>
      </div>    

      <div class="bk-image" >
        <img width="1000px" height= "100%" src="/images/library2.svg" page-centered alt="">
        </div>
      
    `
    render(template, App.rootEl)
  }
}


export default new ProfileView()
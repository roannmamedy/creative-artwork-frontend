import App from './../../App'
import {html, render } from 'lit-html'
import {anchorRoute, gotoRoute} from './../../Router'
import Auth from './../../Auth'
import Utils from './../../Utils'

class SignInView {
  init(){
    console.log('SignInView.init')
    document.title = 'Sign In'
    this.render()
    Utils.pageIntroAnim()
  }

  signInSubmitHandler(e){
    e.preventDefault()
    const formData = e.detail.formData
    const submitBtn = document.querySelector('.submit-btn')
    submitBtn.setAttribute('loading', '')    
    
    // sign in using Auth    
    Auth.signIn(formData, () => {
      submitBtn.removeAttribute('loading')
    })
  }

  render(){    
    const template = html`      
      <div class="page-content page-centered">
        <div class="signinup-box">       
         
        </div>
      </div>

    <div class="form-container sign-in-container">

      <form action="#">
        <h1>Sign in</h1>

        <sl-form class="form-signup dark-theme" @sl-submit=${this.signInSubmitHandler}>
       <br>

        <div class="input-group">
        <sl-input name="email" type="email" placeholder="Email"></sl-input>
        </div>

        <div class="input-group">
        <sl-input name="password" type="password" placeholder="Password" required toggle-password></sl-input>
        </div>


       <br>
       <br>

        <sl-button class="submit-btn" type="primary" submit style="width: 70%;">Sign In</sl-button>
      </sl-form>

    </div>


    <div class="overlay-container">
      <div class="overlay">
        <div class="overlay-panel overlay-left">
        </div>

        <div class="overlay-panel overlay-right ">
          
          <h1>Hey There!</h1>
          <p>Are you a designer, an artist or just passionate about the creative universe?
            <br>You're in the right place!
            <br>This website specialises in the selling and buying of art goodies</p>
          <h2></h2>
          <sl-button class="ghost" type="primary" submit style="width: 40%;" @click=${() => gotoRoute('/signup')}>Sign Up</sl-button>
          
        </div>
        <img src="/images/11.png" width="100%" height=""/>
      </div>
    </div>
    </div>

    `
    render(template, App.rootEl)    
  }
}

export default new SignInView()
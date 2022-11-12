import App from './../../App'
import Auth from './../../Auth'
import {html, render } from 'lit-html'
import {anchorRoute, gotoRoute} from './../../Router'
import Utils from './../../Utils'

class SignUpView{
   
  init(){      
    console.log('SignUpView.init')  
    document.title = 'Sign In'    
    this.render()
    Utils.pageIntroAnim()
  }

  signUpSubmitHandler(e){
    e.preventDefault()    
    const submitBtn = document.querySelector('.submit-btn')
    submitBtn.setAttribute('loading', '')    
    const formData = e.detail.formData
    
    // sign up using Auth
    Auth.signUp(formData, () => {
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
			<h1>Create Account</h1>

      <sl-form class="form-signup" @sl-submit=${this.signUpSubmitHandler}>

      <br>

			<div class="input-group">
              <sl-input name="firstName" type="text" placeholder="First Name" required></sl-input>
            </div>

            <div class="input-group">
              <sl-input name="lastName" type="text" placeholder="Last Name" required></sl-input>
            </div>

            <div class="input-group">
              <sl-input name="email" type="email" placeholder="Email" required></sl-input>
            </div>

            <div class="input-group">
              <sl-select name="accessLevel" placeholder="I am a ...">
                <sl-menu-item value="1">Buyer</sl-menu-item>
                <sl-menu-item value="2">Seller</sl-menu-item>
                </sl-select>
            </div>

            <div class="input-group">
              <sl-input name="password" type="password" placeholder="Password" required toggle-password></sl-input>
            </div> 

            <sl-button type="primary" class="submit-btn" submit style="width: 70%;">Sign Up</sl-button>
          </sl-form>
	</div>

	<div class="overlay-container">
		<div class="overlay">
			<div class="overlay-panel overlay-right">
				<h1>Welcome Back!</h1>
				<p>Wanna shop or sell? login to continue!</p>
        <h2></h2>
				<sl-button class="ghost" type="primary" submit style="width: 40%;" @click=${() => gotoRoute('/signin')}>Sign In</sl-button>
			</div>
      <img src="/images/11.png" width="100%" height=""/>
		</div>
	</div>
</div>

    `
    render(template, App.rootEl)
  }
}


export default new SignUpView()
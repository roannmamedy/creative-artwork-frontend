import { LitElement, html, css } from '@polymer/lit-element'
import {anchorRoute, gotoRoute} from './../Router'
import Auth from './../Auth'
import App from './../App'

customElements.define('va-app-header', class AppHeader extends LitElement {
  constructor(){
    super()    
  }

  static get properties(){
    return {
      title: {
        type: String
      },
      user: {
        type: Object
      }
    }
  }

  firstUpdated(){
    super.firstUpdated()
    this.navActiveLinks()    
  }

  navActiveLinks(){	
    const currentPath = window.location.pathname
    const navLinks = this.shadowRoot.querySelectorAll('.app-top-nav a, .app-side-menu-items a')
    navLinks.forEach(navLink => {
      if(navLink.href.slice(-1) == '#') return
      if(navLink.pathname === currentPath){			
        navLink.classList.add('active')
      }
    })
  }

  hamburgerClick(){  
    const appMenu = this.shadowRoot.querySelector('.app-side-menu')
    appMenu.show()
  }
  
  menuClick(e){
    e.preventDefault()
    const pathname = e.target.closest('a').pathname
    const appSideMenu = this.shadowRoot.querySelector('.app-side-menu')
    // hide appMenu
    appSideMenu.hide()
    appSideMenu.addEventListener('sl-after-hide', () => {
      // goto route after menu is hidden
      gotoRoute(pathname)
    })


  }





  render(){    
    return html`
    <style>    
   @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');  
      * {
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
        margin: 0; 
        padding: 0; 
        scroll-padding-top: 2rem; 
        scroll-behavior: smooth; 
        box-sizing: border-box; 
        list-style: none; 
        text-decoration: none;
      }

      img{
        width: 100%;
      }
      .app-header {
        position: fixed;
            top: 0;
            right: 0;
            left: 0;
            height: var(--app-header-height);
            color: #000;
            display: flex;
            z-index: 9;
            align-items: center;
      }
      

      .app-header-main {
        flex-grow: 1;
        display: flex;
        align-items: center;
      }

      .app-header-main::slotted(h1){
        color: #000;
      }

      .logo  {
            display: inline-block;
            padding: 1em;
            width: 90px;

          }
      
      .chevron-right-btn::part(base) {
        color: #000;
      }

      
@media screen and (min-width: 720px) {
  .chevron-right-btn {
    display: none;
  }
}

      .app-top-nav {
        display: flex;
        height: 100%;
        align-items: center;
      }

      .app-top-nav a {
        display: inline-block;
        padding: .8em;
        text-decoration: none;
        color: #000000;
      }
      
      .app-side-menu-items a {
        display: block;
        padding: .5em;
        text-decoration: none;
        font-size: 1.3em;
        color: #333;
      }

      .app-side-menu-logo {
        width: 120px;
        margin-bottom: 1em;
        position: absolute;
        top: 2em;
        left: 1.5em;
      }

      .page-title {
        color: var(--app-header-txt-color);
        margin-right: 0.5em;
        font-size: var(--app-header-title-font-size);
      }

      /* active nav links */
      .app-top-nav a.active,
      .app-side-menu-items a.active {
        font-weight: bold;
      }

      /* RESPONSIVE - MOBILE ------------------- */
      @media all and (max-width: 768px){       
        
        .app-top-nav {
          display: none;
        }
      }




    </style>

    <header class="app-header">
      <sl-icon-button class="chevron-right-btn" name="chevron-right" @click="${this.hamburgerClick}" style="font-size: 1.5em;"></sl-icon-button>       
      <a href="/"><img class="logo" src="/images/logoblack.png" /></a>
      <div class="app-header-main">
        ${this.title ? html`
          <h1 class="page-title">${this.title}</h1>
        `:``}
        <slot></slot>
      </div>

      <nav class="app-top-nav">
        <a href="/" @click="${anchorRoute}">Home</a>  
        ${this.user.accessLevel == 2  ? html`
        <a href="/newArtwork" @click="${anchorRoute}">Add Artwork</a> 
        `:html`` }
        <a href="/myLibrary" @click="${anchorRoute}"> <sl-icon slot="prefix" name="basket"></sl-icon> Cart</a>
        <a href="/artworks" @click="${anchorRoute}"> <sl-icon slot="prefix" name="brush"></sl-icon> Artworks</a>  
        <a href="/guide" @click="${anchorRoute}"> <sl-icon slot="prefix" name="book"></sl-icon> Guide</a>  

        <sl-dropdown>
          <a slot="trigger" href="#" @click="${(e) => e.preventDefault()}">
            <sl-avatar style="--size: 24px;" image=${(this.user && this.user.avatar) ? `${App.apiBase}/images/${this.user.avatar}` : ''}></sl-avatar> ${this.user && this.user.firstName}
          </a>
          <sl-menu>            
            <sl-menu-item @click="${() => gotoRoute('/profile')}">Profile</sl-menu-item>
            <sl-menu-item @click="${() => gotoRoute('/editProfile')}">Edit Profile</sl-menu-item>
            <sl-menu-item @click="${() => Auth.signOut()}">Sign Out</sl-menu-item>
          </sl-menu>
        </sl-dropdown>
      </nav>
    </header>

    <sl-drawer class="app-side-menu" placement="left">
      <img class="app-side-menu-logo" src="/images/logoblack.png">
      <nav class="app-side-menu-items">
        <a href="/" @click="${this.menuClick}"> <sl-icon slot="prefix" name="house"></sl-icon> Home</a>
        <a href="/profile" @click="${this.menuClick}"> <sl-icon slot="prefix" name="person"></sl-icon> Profile</a>
        <a href="/myLibrary" @click="${this.menuClick}"> <sl-icon slot="prefix" name="basket"></sl-icon> Cart</a>
        <a href="/artworks" @click="${this.menuClick}"> <sl-icon slot="prefix" name="brush"></sl-icon> Artworks</a>
        ${this.user.accessLevel == 2  ? html`<a href="/newArtwork" @click="${this.menuClick}">Add Artwork</a> `:html`` }
        <a href="#" @click="${() => Auth.signOut()}"> <sl-icon slot="prefix" name="power"></sl-icon> Sign Out</a>
        
      </nav>  
    </sl-drawer>

    `
  }
  
})


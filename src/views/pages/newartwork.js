import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'
import ArtworkAPI from '../../ArtworkAPI'
import Toast from '../../Toast'

class NewArtworkView {
  init(){
    document.title = 'New Artwork'    
    this.render()    
    Utils.pageIntroAnim()
  }

  async newArtworkSubmitHandler(e){
    e.preventDefault()    
    const submitBtn = document.querySelector('.submit-btn')
    submitBtn.setAttribute('loading', '')    
    const formData = e.detail.formData
    try {
      await ArtworkAPI.newArtwork(formData)
      Toast.show('Artwork added!')
      submitBtn.removeAttribute('loading') 
      //reset data
      const textInputs = document.querySelectorAll('sl-input, sl-textarea')
      if(textInputs) textInputs.forEach(textInput => textInput.value = null)
      //reset radio input 
      const radioInputs = document.querySelectorAll('sl-radio')
      if(radioInputs) radioInputs.forEach(radioInput => radioInput.removeAttribute('checked'))
      //reset fill input 
      const fileInput = document.querySelector('input[type=file]')
      if(fileInput) fileInput.value = null


    }catch (err){ 
      Toast.show(err,'error')
      submitBtn.removeAttribute('loading') 
    }

  }


  render(){
    const template = html`
      <va-app-header title="New Artwork" user="${JSON.stringify(Auth.currentUser)}"></va-app-header>
      <div class="page-content">        
        <h1>New Artwork</h1>
        <sl-form class="page-form" @sl-submit=${this.newArtworkSubmitHandler}>
        <input type="hidden" name="user" value="${Auth.currentUser._id}" />
        <div class="input-group">
          <h3>Artwork Name:</h3> 
          <sl-input name="name" type="text" placeholder="Mona Lisa" required></sl-input>
        </div>
        
        <div class="input-group">
          <h3>Author:</h3> 
          <sl-textarea name="author" rows="1" placeholder="Leonardo da Vinci" required></sl-textarea>
        </div>
        
        <div class="input-group" style="margin-bottom: 1em; margin-top: 1em;">
            <h3>Genre:</h3> 
            <sl-radio-group label="Select artwork genre" no-fieldset>

              <sl-radio name="genre" value="shading">Shading</sl-radio>
              <sl-radio name="genre" value="portrait">Portrait</sl-radio>
              <sl-radio name="genre" value="horror">Horror</sl-radio>
              <sl-radio name="genre" value="oilPainting">Oil Painting</sl-radio>
              <sl-radio name="genre" value="romance">Romance</sl-radio>
              <sl-radio name="genre" value="action">Action</sl-radio>
              <sl-radio name="genre" value="poetry">Poetry</sl-radio>
              <sl-radio name="genre" value="colouredPencil">Coloured Pencil</sl-radio>
              <sl-radio name="genre" value="detailed">Detailed</sl-radio>
              <sl-radio name="genre" value="drama">Drama</sl-radio>
              <sl-radio name="genre" value="thriller">Thriller</sl-radio>
              <sl-radio name="genre" value="selfHelp">Self Help</sl-radio>
              <sl-radio name="genre" value="small">Small</sl-radio>
              <sl-radio name="genre" value="mystery">Mystery</sl-radio>

            </sl-radio-group>
          </div>

        
        <div class="input-group">
          <h3>Artwork Price:</h3> 
          <sl-textarea name="price" rows="3" placeholder="49" required></sl-textarea>
        </div>
        
        <div class="input-group">
          <h3>Artwork Summary:</h3> 
          <sl-textarea name="summary" rows="4" placeholder="Summary" required></sl-textarea>
        </div>
        
        <div class="input-group" style="margin-bottom: 2em;">
          <label>Image</label><br>
          <input type="file" name="image" />              
        </div>
        <sl-button type="primary" class="submit-btn" submit>Add Artwork</sl-button>
        </sl-form>  

        
      </div>      
    `
    render(template, App.rootEl)
  }
}


export default new NewArtworkView()
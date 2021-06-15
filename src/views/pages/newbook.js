import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'
import BookAPI from '../../BookAPI'
import Toast from '../../Toast'

class NewBookView {
  init(){
    document.title = 'New Book'    
    this.render()    
    Utils.pageIntroAnim()
  }

  async newBookSubmitHandler(e){
    e.preventDefault()    
    const submitBtn = document.querySelector('.submit-btn')
    submitBtn.setAttribute('loading', '')    
    const formData = e.detail.formData
    try {
      await BookAPI.newBook(formData)
      Toast.show('Book added!')
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
      <va-app-header title="New Book" user="${JSON.stringify(Auth.currentUser)}"></va-app-header>
      <div class="page-content">        
        <h1>New Book</h1>
        <sl-form class="page-form" @sl-submit=${this.newBookSubmitHandler}>
        <input type="hidden" name="user" value="${Auth.currentUser._id}" />
        <div class="input-group">
          <h3>Book Name:</h3> 
          <sl-input name="name" type="text" placeholder="Vigneron's Life" required></sl-input>
        </div>
        
        <div class="input-group">
          <h3>Author:</h3> 
          <sl-textarea name="author" rows="1" placeholder="Louis Vigneron" required></sl-textarea>
        </div>
        
        <div class="input-group" style="margin-bottom: 1em; margin-top: 1em;">
            <h3>Genre:</h3> 
            <sl-radio-group label="Select book genre" no-fieldset>
              <sl-radio name="genre" value="crime">Crime</sl-radio>
              <sl-radio name="genre" value="fantasy">Fantasy</sl-radio>
              <sl-radio name="genre" value="horror">Horror</sl-radio>
              <sl-radio name="genre" value="memoir">Memoir</sl-radio>
              <sl-radio name="genre" value="guide">Guide</sl-radio>
              <sl-radio name="genre" value="romance">Romance</sl-radio>
              <sl-radio name="genre" value="action">Action</sl-radio>
              <sl-radio name="genre" value="poetry">Poetry</sl-radio>
              <sl-radio name="genre" value="phylosphy">Phylosophy</sl-radio>
              <sl-radio name="genre" value="biography">Biography</sl-radio>
              <sl-radio name="genre" value="drama">Drama</sl-radio>
              <sl-radio name="genre" value="thriller">Thriller</sl-radio>
              <sl-radio name="genre" value="selfHelp">Self Help</sl-radio>
              <sl-radio name="genre" value="suspense">Suspense</sl-radio>
              <sl-radio name="genre" value="mystery">Mystery</sl-radio>
            </sl-radio-group>
          </div>

        
        <div class="input-group">
          <h3>Book Description:</h3> 
          <sl-textarea name="description" rows="3" placeholder="The book was published in 1532 by ......." required></sl-textarea>
        </div>
        
        <div class="input-group">
          <h3>Book Summary:</h3> 
          <sl-textarea name="summary" rows="4" placeholder="Summary" required></sl-textarea>
        </div>
        
        <div class="input-group" style="margin-bottom: 2em;">
          <label>Image</label><br>
          <input type="file" name="image" />              
        </div>
        <sl-button type="primary" class="submit-btn" submit>Add Book</sl-button>
        </sl-form>  

        
      </div>      
    `
    render(template, App.rootEl)
  }
}


export default new NewBookView()
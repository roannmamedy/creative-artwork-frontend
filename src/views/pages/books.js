import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'
import BookAPI from './../../BookAPI'
import Toast from './../../Toast'

class BooksView {
  async init(){
    document.title = 'Books' 
    this.books = null   
    this.render()    
    Utils.pageIntroAnim()
    await this.getBooks()
    //this.filterBooks('genre',' ')
  }

 async filterBooks(field,match){
   //validate 

    if(!field || !match) return 

    // get fresh copy of the books 
    this.books = await BookAPI.getBooks()

    let filteredBooks

    if (field == 'genre'){
      filteredBooks = this.books.filter(book => book.genre == match)
      this.books = filteredBooks 
      this.render()
    }
  }

  clearFilterBtns(){
    const filterBtns = document.querySelectorAll('.filter-btn')
    filterBtns.forEach(btn => btn.removeAttribute("type"))
  }
  
  handleFilterBtn(e){
    // clear filter buttons active 
    this.clearFilterBtns()

    // set button active 
    e.target.setAttribute("type", "primary")
    // extraxt the field & match from the button
    const field = e.target.getAttribute ("data-field")
    const match = e.target.getAttribute ("data-match")

    //filter books
    this.filterBooks(field, match)
  } 

    clearFilter(){
      this.getBooks()
      this.clearFilterBtns()
    }


  async getBooks(){
    try{
      this.books = await BookAPI.getBooks()
      console.log(this.books)
      this.render()
    }catch(err){
      Toast.show(err, 'error')
    }
  }

  render(){
    const template = html`
    <style>
    .filter-menu{
        display: flex;
        align-items: center;
    }

    .filter-menu > div {
      margin-right: 1em;
    }
    </style>


      <va-app-header title="Books" user="${JSON.stringify(Auth.currentUser)}"></va-app-header>
      <div class="page-content">        
        <h1> Book Store </h1>

        <div class="filter-menu">
          <div> Filter by </div>
          <div>
           <strong> Genre </strong>
           <sl-button id="g" class="filter-btn" size ="small" data-field="genre" data-match="guide" @click=${this.handleFilterBtn.bind(this)}>Guide</sl-button>
           <sl-button class="filter-btn" size ="small" data-field="genre" data-match="action" @click=${this.handleFilterBtn.bind(this)}>Action</sl-button>
           <sl-button class="filter-btn" size ="small" data-field="genre" data-match="crime" @click=${this.handleFilterBtn.bind(this)}>Crime</sl-button>
           <sl-button class="filter-btn" size ="small" data-field="genre" data-match="fantasy" @click=${this.handleFilterBtn.bind(this)}>Fantasy</sl-button>
           <sl-button class="filter-btn" size ="small" data-field="genre" data-match="horror" @click=${this.handleFilterBtn.bind(this)}>Horror</sl-button>
           <sl-button class="filter-btn" size ="small" data-field="genre" data-match="memoir" @click=${this.handleFilterBtn.bind(this)}>Memoir</sl-button>
           <sl-button class="filter-btn" size ="small" data-field="genre" data-match="romance" @click=${this.handleFilterBtn.bind(this)}>Romance</sl-button>
           <sl-button class="filter-btn" size ="small" data-field="genre" data-match="poetry" @click=${this.handleFilterBtn.bind(this)}>Poetry</sl-button>
           <sl-button class="filter-btn" size ="small" data-field="genre" data-match="phylosophy" @click=${this.handleFilterBtn.bind(this)}>Phylosophy</sl-button>
           <sl-button class="filter-btn" size ="small" data-field="genre" data-match="biography" @click=${this.handleFilterBtn.bind(this)}>Biography</sl-button>
           <sl-button class="filter-btn" size ="small" data-field="genre" data-match="drama" @click=${this.handleFilterBtn.bind(this)}>Drama</sl-button>
           <sl-button class="filter-btn" size ="small" data-field="genre" data-match="thriller" @click=${this.handleFilterBtn.bind(this)}>Thriller</sl-button>
           <sl-button class="filter-btn" size ="small" data-field="genre" data-match="selfHelp" @click=${this.handleFilterBtn.bind(this)}>Self Help</sl-button>
           <sl-button class="filter-btn" size ="small" data-field="genre" data-match="suspense" @click=${this.handleFilterBtn.bind(this)}>Suspense</sl-button>
           <sl-button class="filter-btn" size ="small" data-field="genre" data-match="mystery" @click=${this.handleFilterBtn.bind(this)}>Mystery</sl-button>
           </div>
           
           <div>
            <sl-button size="small" @click=${this.clearFilter.bind(this)}>Clear Filter</sl-button>
           </div>
        </div>


          
        <div class="books-grid">
        ${this.books == null ? html `
            <sl-spinner></sl-spinner>
        
        ` : html`
          ${this.books.map(book => html` 

          <va-book class="book-card"
          id="${book. _id}"
          name="${book.name}"
          author="${book.author}" 
          genre="${book.genre}" 
          description="${book.description}" 
          summary="${book.summary}" 
          image="${book.image}">
         
          </va-book>
        `)}
        `}
    </div>
        
      </div>      
    `
    render(template, App.rootEl)
  }
}


export default new BooksView()
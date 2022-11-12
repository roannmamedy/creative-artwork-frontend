import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'
import ArtworkAPI from '../../ArtworkAPI'
import Toast from '../../Toast'

class ArtworksView {
  async init(){
    document.title = 'Artworks' 
    this.artworks = null   
    this.render()    
    Utils.pageIntroAnim()
    await this.getArtworks()
    //this.filterArtworks('genre',' ')
  }

 async filterArtworks(field,match){
   //validate 

    if(!field || !match) return 

    // get fresh copy of the artworks 
    this.artworks = await ArtworkAPI.getArtworks()

    let filteredArtworks

    if (field == 'genre'){
      filteredArtworks = this.artworks.filter(artwork => artwork.genre == match)
      this.artworks = filteredArtworks 
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

    //filter artworks
    this.filterArtworks(field, match)
  } 

    clearFilter(){
      this.getArtworks()
      this.clearFilterBtns()
    }


  async getArtworks(){
    try{
      this.artworks = await ArtworkAPI.getArtworks()
      console.log(this.artworks)
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


      <va-app-header title="Artworks" user="${JSON.stringify(Auth.currentUser)}"></va-app-header>
      <div class="page-content">        
        <h1> Artwork Store </h1>

        <div class="filter-menu">
          <div> Filter by </div>
          <div>
           <strong> Genre </strong>
          
           <sl-button class="filter-btn" size ="small" data-field="genre" data-match="action" @click=${this.handleFilterBtn.bind(this)}>Action</sl-button>
           <sl-button class="filter-btn" size ="small" data-field="genre" data-match="shading" @click=${this.handleFilterBtn.bind(this)}>Shading</sl-button>
           <sl-button class="filter-btn" size ="small" data-field="genre" data-match="portrait" @click=${this.handleFilterBtn.bind(this)}>Portrait</sl-button>
           <sl-button class="filter-btn" size ="small" data-field="genre" data-match="horror" @click=${this.handleFilterBtn.bind(this)}>Horror</sl-button>
           <sl-button class="filter-btn" size ="small" data-field="genre" data-match="oilPainting" @click=${this.handleFilterBtn.bind(this)}>Oil Painting</sl-button>
           <sl-button class="filter-btn" size ="small" data-field="genre" data-match="romance" @click=${this.handleFilterBtn.bind(this)}>Romance</sl-button>
           <sl-button class="filter-btn" size ="small" data-field="genre" data-match="poetry" @click=${this.handleFilterBtn.bind(this)}>Poetry</sl-button>
           <sl-button class="filter-btn" size ="small" data-field="genre" data-match="colouredPencil" @click=${this.handleFilterBtn.bind(this)}>Coloured Pencil</sl-button>
           <sl-button class="filter-btn" size ="small" data-field="genre" data-match="detailed" @click=${this.handleFilterBtn.bind(this)}>Detailed</sl-button>
           <sl-button class="filter-btn" size ="small" data-field="genre" data-match="drama" @click=${this.handleFilterBtn.bind(this)}>Drama</sl-button>
           <sl-button class="filter-btn" size ="small" data-field="genre" data-match="thriller" @click=${this.handleFilterBtn.bind(this)}>Thriller</sl-button>
           <sl-button class="filter-btn" size ="small" data-field="genre" data-match="selfHelp" @click=${this.handleFilterBtn.bind(this)}>Self Help</sl-button>
           <sl-button class="filter-btn" size ="small" data-field="genre" data-match="small" @click=${this.handleFilterBtn.bind(this)}>Small</sl-button>
           <sl-button class="filter-btn" size ="small" data-field="genre" data-match="mystery" @click=${this.handleFilterBtn.bind(this)}>Mystery</sl-button>
           </div>
           
           <div>
            <sl-button size="small" @click=${this.clearFilter.bind(this)}>Clear Filter</sl-button>
           </div>
        </div>


          
        <div class="artworks-grid">
        ${this.artworks == null ? html `
            <sl-spinner></sl-spinner>
        
        ` : html`
          ${this.artworks.map(artwork => html` 

          <va-artwork class="artwork-card"
          id="${artwork. _id}"
          name="${artwork.name}"
          author="${artwork.author}" 
          genre="${artwork.genre}" 
          price="${artwork.price}" 
          summary="${artwork.summary}" 
          image="${artwork.image}">
         
          </va-artwork>
        `)}
        `}
    </div>
        
      </div>      
    `
    render(template, App.rootEl)
  }
}


export default new ArtworksView()
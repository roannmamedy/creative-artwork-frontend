import App from './../../App'
import { html, render } from 'lit-html'
import { gotoRoute, anchorRoute } from './../../Router'
import Auth from './../../Auth'
import Utils from './../../Utils'
import artworks from './artworks'
import ArtworkAPI from './../../ArtworkAPI'
import Toast from './../../Toast'

class HomeView {
  init() {
    console.log('HomeView.init')
    document.title = 'Home'
    this.render()
    Utils.pageIntroAnim()
    this.getArtworks()

  }

  async getArtworks() {
    try {
      this.artworks = await ArtworkAPI.getArtworks()
      console.log(this.artworks)
      this.render()
    } catch (err) {
      Toast.show(err, 'error')
    }
  }

  render() {
    const template = html`
      <va-app-header title="Home" user=${JSON.stringify(Auth.currentUser)}></va-app-header>
      
      <div class="page-content">
      

      <section class="sec1">
       
       <div class="secone">
       <h1 style="color:white">Welcome,</h1>
       <h1 style="color:white">${Auth.currentUser.firstName}!</h1><br>
       <p>Discover, Collect, Sell and <br> Buy creative artworks</p>
       <sl-button size="medium" @click=${() => gotoRoute('/guide')} >Let's get started</sl-button>
       <p>&nbsp;</p>
     </div>
     <img src="/images/8.png" width="100%" height=""/>
   </section> 
        <div class="header calign " >  
        
        




<svg xmlns="http://www.w3.org/2000/svg" id="verapc" width="1920" baseProfile="tiny" class="svgmate" preserveAspectRatio="xMaxYMin meet" version="1" viewBox="0 0 1920 1080"><style>@keyframes plantone{0%,to{transform:scaleY(1) rotate(0deg)}50%{transform:scaleY(1.02) rotate(1deg)}}@keyframes steam{0%{transform:scaleY(1.02);opacity:0}50%{opacity:.5}to{transform:scaleY(1);opacity:0}}@keyframes head{0%,to{transform:rotate(0deg)}85%{transform:rotate(3deg)}}@keyframes shapemask{0%{transform:scaleX(1) scaleY(1) rotate(0deg)}25%{transform:scaleX(1.03) rotate(0deg)}50%{transform:scaleY(1.03) rotate(0deg)}}@keyframes sleave{0%,to{transform:rotate(0deg)}85%{transform:rotate(3deg)}}@keyframes arm{0%,to{transform:translateX(0) rotate(0deg)}85%{transform:translateX(-15px) rotate(0deg)}}@keyframes armright{0%,10%,80%,to{transform:rotate(0deg)}40%,50%{transform:rotate(-4deg)}}@keyframes veraslidein{0%{transform:translateX(1200px)}50%{transform:translateX(0)}75%{transform:translateX(50px)}90%{transform:translateX(42px)}to{transform:translateX(45px)}}@keyframes verascalein{0%,15%{transform:scale(0)}50%{transform:scale(1.1)}75%{transform:scale(.98)}90%{transform:scale(1.01)}to{transform:scale(1)}}@keyframes veradropin{0%{transform:translateY(-1200px)}50%{transform:translateY(45px)}75%{transform:translateY(-5px)}90%{transform:translateY(3px)}to{transform:translateY(0)}}#verapc.svgmate .plant{animation-name:plantone;transform-origin:1907.25px 884.25px;transition:all .5s}#verapc.svgmate .plant:hover{opacity:.5}#verapc.svgmate .arm,#verapc.svgmate .plant,#verapc.svgmate .steam{animation-timing-function:ease-in-out;animation-iteration-count:infinite}#verapc.svgmate .steam{transition:all .5s;animation-name:steam}#verapc.svgmate .arm{animation-name:arm;animation-duration:5s;transform-origin:1009.149px 711.625px}</style><g id="L1_x5F_RoomWalls"><path fill="#F3726C" d="M895 0v737l-660 343H0V0z"/><path fill="#FEEBE8" d="M1920 0v737H895V0z"/><path fill="#F8AFA3" d="M1920 737H895l-660 343h1685z"/></g><g id="_L3_x5F_Frame-Plant-STable"><g id="_x3C_Group_x5F_FRAME_x3E_" class="framedropin" style="animation-name:veradropin;animation-iteration-count:1;animation-duration:.9s;animation-timing-function:ease-in-out"><path fill="#FAC2BA" d="M1489 539c0 4-3 7-7 7h-213c-4 0-7-3-7-7V406c0-4 3-7 7-7h213c4 0 7 3 7 7v133z"/><path fill="#FBCFC9" d="M1481 532c0 4-3 7-6 7h-199c-4 0-7-3-7-7V413c0-4 3-6 7-6h199c3 0 6 2 6 6v119z"/><path fill="#FDDCD7" d="M1481 464v32h-130v-25s68-10 130-7z"/><g id="_x3C_Group_x5F_TREE_x5F_Ani_x3E_" fill="#FFF"><path d="M1446 494l-2-10c0-4 3-17 2-27-1-9 9-28 9-14s-1 29 0 34 5 13 5 17h-14zM1464 494v-25c1-5 3-3 4 3l5 22h-9z"/></g><path fill="#F7A09E" d="M1481 491v41c0 4-3 7-6 7h-199c-4 0-7-3-7-7v-74s14-5 33-4c50 3 32 30 145 37h34z"/><path fill="#F9B4B0" d="M1304 454c6 3 23 13 23 21 0 13-18 21-18 38 0 12 47 26 47 26h-32s-16-9-27-20c-10-10 3-19 11-27 5-6 12-11 12-17 0-7-27-21-27-21h11z"/></g><g id="_x3C_Group_x5F_STable_x3E_" class="tabledropin" style="animation-name:veradropin;animation-iteration-count:1;animation-duration:1s;animation-timing-function:ease-in-out"><path fill="#17354C" d="M942 727l-6 53c-1 5-4 6-4-1l1-52h9zM1027 727l6 53c2 5 5 6 5-1l-2-52h-9z"/><path fill="#F58F8B" d="M1085 618c0-9-7-16-16-16l-147-6c-31 2-89 23-89 23l252-1z"/><path fill="#F4827F" d="M991 618l78-16c9 0 16 7 16 16v108c0 9-7 16-16 16l-62 16c-9 0-16-7-16-16V618"/><path fill="#F7A09E" d="M1020 742c0 9-7 16-16 16H839c-9 0-16-7-16-16V634c0-9 7-16 16-16h165c9 0 16 7 16 16v108z"/><path fill="none" stroke="#F4827F" stroke-miterlimit="10" stroke-width="4" d="M823 686h197"/><path fill="#FEEBE8" d="M903 660l-7-1c-3-1-3-4-2-6 2-2 3 0 4 1l5 1h37l5-1c1-1 2-3 4-1 1 2 1 5-1 6l-8 1h-37zM903 725c-2 0-5 0-7-2-3-1-3-4-2-5 2-2 3-1 4 1h47c1-2 2-3 4-1 1 1 1 4-1 5-3 2-6 1-8 1h-37z"/><path fill="#17354C" d="M879 758l-6 52c-1 6-4 6-4-1l1-51h9zM964 758l6 52c2 6 5 6 5-1l-2-51h-9z"/></g><g id="L4_x5F_PPlant" class="plantdropin" style="animation-name:veradropin;animation-iteration-count:1;animation-duration:1.3s;animation-timing-function:ease-in-out"><ellipse cx="898" cy="573" fill="#D9D4D3" rx="29" ry="4"/><g id="_x3C_Group_x5F_PPlant_x3E_"><path fill="#17354C" d="M898 579s0-13 6-21c5-8 16-7 21-6s22 6 30 5 13-5 21-4c16 1 23 5 32 6s20-5 10-14c-6-6-12-5-30-11s-27-5-37-5c-11 0-48-2-55 50h2z"/><path fill="#4F6F83" d="M893 580l-21-20c-3-2-9 1-12 1-4 0-8 0-16-8-4-6-10-16-13-18-12-10-16-16-18-18-2-4-3-7 3-3s7 8 19 11c11 3 12 10 27 15 13 5 9 14 10 16 1 4 24 23 24 23l-3 1z"/><path fill="#4F6F83" d="M885 579v-12c0-4-6-1-18-27-6-14-1-24-2-38l-5-35c0-7 2-10 5-4 8 15 14 15 15 29 1 13 6 23 11 46 5 24-4 22-4 30v11h-2z"/><path fill="#17354C" d="M862 463l2 4 4 11a119 119 0 0 1 5 16l1 5a250 250 0 0 0 4 23 323 323 0 0 1 8 37v0a247 247 0 0 0-8-27l-2-9a121 121 0 0 1-5-29 71 71 0 0 0-4-15l-3-12-2-4z"/><path fill="#4F6F83" d="M903 579v-18c1-7 11-12 14-32 4-24-9-63-12-74l-5-26c-2-5-3-14-8 2s-4 33 0 47c10 39-12 37 6 70l3 9v22h2z"/><path fill="#17354C" d="M890 579s2-29 6-35 12-2 20-26 5-59 4-63-2-13-8-3-17 31-18 45-5 13-5 24c-1 12 6 14 5 24l-6 34h2z"/></g><path fill="#FFF" d="M898 577c-16 0-29-2-29-4v17c0 11 13 21 29 21s28-10 28-21v-17c0 2-12 4-28 4z"/><path id="_x3C_Path_x5F_TopLeave_x3E_" fill="#17354C" d="M890 577c-1-3-4-6-9-6-3 0-5 2-5 4s0 12-8 12-14 11-17 13l-13 7-9 5c-5 3-8 6-6-1s8-15 12-17c4-3 7-10 9-12s6-10 17-10h13l7-2c3 0 8 1 10 7h-1z"/></g></g><path id="Layer_13" fill="#FFF" d="M126 1080c120-147 255-180 420-327 92-82 222-432 510-522s708 165 864 171 3-432 3-432L-23-28l-16 1109 165-1z" class="shapecut" style="animation-name:shapemask;animation-timing-function:ease-in-out;animation-iteration-count:infinite;animation-duration:5s"/><g class="plantsscalein" style="animation-name:verascalein;animation-iteration-count:1;animation-duration:1.5s;animation-timing-function:ease-in-out;transform-origin:1907.25px 884.25px"><path fill="#17354C" d="M1920 570s-10-70-24-100-66-107-75-124c-9-18-18-15-13 14 6 28 34 88 40 107 6 20 32 80 32 133 1 42 16 87 22 121 9 46-5 54-1 94 1 15 4 35 7 43h12V570z" class="plant p1" style="animation-duration:4s"/><path fill="#355469" d="M1891 858s-6-28-8-52c-2-23-6-61-31-94-15-19-14-56-15-74 0-32-19-55-26-71s-10-32-12-40-6-27-14 10 4 87 17 112c18 38-3 91 20 135 13 23 30 30 41 32s14 3 17 13l8 29h3z" class="plant p2" style="animation-duration:8s"/><path fill="#2A475D" d="M1852 850s-49-48-57-70c-13-35-35-79-85-147-24-32-70-38-85-45-19-9-38-24-43-30-4-6-23-23-3 19 16 35 62 46 83 64 47 40 30 73 62 115 13 17 27 29 53 34 11 2 20 6 29 16 16 16 16 16 37 44h9z" class="plant p3" style="animation-duration:3.6s"/><path fill="#17354C" d="M1883 858s-4-50-82-155-106-145-115-153-26-21-13 17c15 47 3 63 23 88l69 90c36 46 78 79 93 80 6 0 9 5 11 8 5 9 10 25 10 25h4z" class="plant p4" style="animation-duration:4.8s"/><path fill="#17354C" d="M1852 850s-49-48-57-70c-13-35-82-82-97-91-37-23-55-46-60-52-12-15-31-37-22 16 6 34 40 70 62 88 47 40 73 44 99 49 11 2 20 6 29 16 16 16 16 16 37 44h9z" class="plant p5" style="animation-duration:5.6s"/></g><path id="L2_x5F_Table-Carpet" fill="#F69186" d="M453 1080s10-56 100-42c73 11 85 2 106-11 34-21 148-48 345 53H453z"/><g class="peopletableslide" style="animation-name:veraslidein;animation-iteration-count:1;animation-duration:1s;animation-timing-function:ease-in-out;transform:translateX(45px)"><path fill="#F3726C" d="M1920 846l-285-16c-60-3-255-17-429 117l-174 133h888V846z"/><g id="L4Cup_x5F_CupShadow"><path id="_x3C_Path_x5F_CupShadow_x5F_L4Cup_x3E_" fill="#F1635E" d="M1174 972h137l-15-24-81-8-9 7c-12 8-22 17-32 25z"/></g><g id="L5_x5F_Human_x5F_Woman"><path id="_x3C_Path_x5F_WArm_x5F_back_x3E_" fill="#F68E5A" d="M1532 830s-10-81-32-113l-28 29 38 84h22z"/><g id="_x3C_Group_x5F_WShirt_x3E_"><path id="_x3C_Path_x5F_Shirt_x5F_middle_x3E__1_" fill="#355469" d="M1228 694s38-53 137-61c0 0 66-4 105 29l48 43s4 5-2 13c-3 4-8 3-10 6-6 6-3 9-10 16-4 3-8 1-12 10l-30 57c-9 17-17 25-38 26s-61 12-79 18c-21 6-91-7-95-45l-14-112z"/><path id="_x3C_Path_x5F_Shirt_x5F_top_x3E_" fill="#17354C" d="M1234 739l-6-45s38-53 137-61c0 0 66-4 105 29l40 35s-1 7-10 8-14-6-18-2c-5 4 9 15 0 22s-19-7-28-2 0 12-10 19c-8 6-27-14-35-9s-2 22-12 25c-7 3-25-17-32-15s-1 27-12 28-12-22-25-22-12 21-23 18c-10-4-2-30-13-34-8-3-15 18-23 17s-1-22-9-24-26 13-26 13z"/><path id="_x3C_Group_x5F_Shirt_x5F_bottom_x3E_" fill="#2A475D" d="M1489 833l-30-36-5 9c-9 18-17 26-38 27s-61 12-79 18c-10 3-31 1-51-5l-1 50c71-38 143-55 203-63h1z"/></g><g id="_x3C_Group_x5F_Face_x5F_Woman_x3E_"><path id="_x3C_Path_x5F_WNeck_x3E_" fill="#F68E5A" d="M1327 630s-5 6-1 13c4 8 31 55 32 59 1 3 6 13 10 4s11-58 11-58-18 15-52-18z"/><path id="_x3C_Path_x5F_WFace_x5F_Shape_x3E_" fill="#F89F71" d="M1313 606s18 47 54 47c26 0 38-32 38-50v-37h-92v40z"/><path id="_x3C_Path_x5F_WHair_x3E_" fill="#FDFEFF" d="M1356 511c-17-1-32 8-44 23-8 10-26 4-25 38 1 10 4 6 4 15-1 9-7 12-7 21s5 40 28 35c20-5 16-17 16-21s-1-6-6-10-5-8-3-10 5-1 7 1 4 4 5-3-4-19 4-16 17 11 40 10 29-13 30-16v27l-2 15s9-1 22-19c7-9 3-17 1-23 0 0-15-25-15-32s-15-31-55-35z"/><g id="_x3C_Group_x5F_WEyes_x3E_" fill="#2C5169"><path d="M1390 610h7c3 0 4-2 2-3-4-3-9 3-9 3zM1356 612h9c3 0 4-2 3-3-5-3-12 3-12 3z"/></g><path id="_x3C_Path_x5F_WNose_x3E_" fill="#F68D59" d="M1383 609c0 2 3 21-4 21s-6-9-3-15 6-13 7-6z"/><path id="_x3C_Path_x5F_WMouth_x3E_" fill="#F5845F" d="M1373 643c4 0 7-2 8-3s-3-2-8-2-10-1-7 2c2 2 5 3 7 3z"/></g><path fill="#F1625D" d="M1507 874h-2c-7-3-23-11-41-37-35 6-74 15-113 30l156 7z"/><g class="specrotate" style="animation-name:armright;animation-timing-function:ease-in-out;animation-iteration-count:infinite;animation-duration:7.5s;animation-delay:2s;transform-origin:1519px 874.7px"><g id="_x3C_Group_x5F_WGlasses_x3E_"><path fill="#F9B4A7" d="M1346 726h-1c0-1-19-39-23-44l-2-2c-3 0-6 2-8 3h-1v-1c1-1 5-4 9-4l4 3 23 44a1 1 0 0 1-1 1zM1398 702h-1a1362 1362 0 0 0-26-48c-3 0-6 2-7 3h-2v-1c1-1 5-4 9-4l4 3a1300 1300 0 0 1 23 47z"/><path fill="#F9B4A7" d="M1398 703h2v2c-3 4-10 8-16 8h-1l-3-1c0-1 2-4 6-6l12-3m0-2c-4 0-9 1-12 3-8 3-12 10-3 11h1c8 0 20-8 18-12-1-2-2-2-4-2zM1364 719h2v2c-3 4-10 8-16 8h-1l-3-1c0-1 2-4 6-6l12-3m0-2c-4 0-9 1-12 3-8 3-12 10-3 11h1c8 0 20-8 18-12-1-2-2-2-4-2z"/><path fill="#F9B4A7" d="M1368 719l-2-1c4-5 9-6 13-6v2c-3 0-8 1-11 5z"/></g><path id="_x3C_Path_x5F_WArm_x3E__1_" fill="#F89F71" d="M1393 649c-8 1-18 1-24 10s-10 21-5 22c7 1 5-7 8-9 3-3 15-10 11-2-2 4-2 7-2 9s3 3 5-2c3-6 9-6 13-6s8 0 11 10 19 83 33 116c25 59 52 73 62 77 19 6 25-8 25-8s12-35-19-79c-24-34-40-68-58-89s-23-29-27-34-13-16-33-15z"/></g></g><g id="L5_x5F_Human_x5F_Man"><path id="sholderforman" fill="#FFF5F3" d="M1163 622c58 28 85 38 82 193s-26 123-42 114-40-307-40-307z"/><path fill="#FDE6E1" d="M1175 682l10 12c1-2-1-16-5-16s-5 4-5 4z"/><path fill="#F68F5B" d="M1161 617l-8 13c-1 3-5 5 2 16s6 12 6 12h-61s-5-29-5-49c0-8 19-38 22-42 0 0 21 48 44 50z"/><path fill="#17354C" d="M1114 650s15 6 23 5 20-17 20-17 17 36 27 83 16 96 0 242l-93 73 23-386z"/><path fill="#FBCFC9" d="M1089 609s-57 35-91 48c-27 11-62 56-90 141s-42 216-42 282h166l77-59s4-75 15-134 15-122 21-146 9-32 7-43c-1-11-48-57-53-64-5-8-10-25-10-25zM1158 618s41 8 56 102-10 120 6 216l-38 28 1-36c0-19 10-66 8-111-2-38-8-126-38-177l5-22z"/><path fill="#FFF" d="M1122 707c-5-9-8-29-24-49s-26-34-22-42 12-12 22-16c-3 7-5 13-2 20 8 18 29 41 49 61 14 14 6 34 6 34 0-14-3-36-15-15-4 7-5 25-14 7z"/><path fill="#FFF5F3" d="M1156 624l-4 8c-1 1-3 4 2 12s15 28 21 55c0-9 0-20 3-21s7 6 8 16c2-1 2-9-6-26l-24-44z"/><path id="_x3C_Path_x5F_ArmShadow_x3E_" fill="#F1635E" d="M1065 1055l150 5c16 1 38-4 48-3h30l-17-14-183-10-28 22z"/><g id="_x3C_Group_x5F_Mouse_x3E_" class="arm"><path fill="#FBCFC9" d="M1363 1051c-6 6-17 11-36 10s-54 1-46-17 16-18 59-15c13 0 41 4 23 22z"/><path fill="#F3726C" d="M1353 1037c-11-7-24-5-14 0s24 6 14 0z"/></g><g id="_x3C_Group_x5F_ManSleeve_x3E_" class="sleave" style="animation-name:sleave;animation-timing-function:ease-in-out;animation-iteration-count:infinite;animation-duration:5s;transform-origin:1009.149px 711.625px"><path id="_x3C_Path_x5F_WhiteSleeve_x3E_" fill="#FFF5F3" d="M1084 712c-9-22-26-58-65-58s-97 56-97 183 1 211 45 213c7 0 14-9 26-17 25-19 60-40 64-47 6-10 7-36 6-56s6-107 18-136 13-60 3-82z"/><path id="_x3C_Path_x5F_WhiteSleeve_x5F_Shadow_x3E_" fill="#FBCFC9" d="M994 1023s-21 18-31 18-13-10-13-17c2-20 46-76 113-78 0 0-36 49-69 77z"/></g><g id="_x3C_Group_x5F_ManArm_x3E_" class="arm"><path fill="#F89F71" d="M1347 1034l-15-20c-3-5-8-10-25-6s-37 10-51 5-172-62-186-64-30-4-62 13-54 36-40 47 41 23 97 26 155 12 175 13 22-3 30-2l11 2c5 0 17-14 25-14s14 6 18 9 8 3 4-2-10-11 3-1c2 2 5 4 11 3s18 1 5-9z"/><path fill="#F79463" d="M1024 954l-16 8c-32 18-54 36-40 47s41 23 97 26 155 12 175 13c0 0-23-22-66-22s-84-13-104-22-35-18-46-50z"/></g><g class="armright" style="animation-name:armright;animation-timing-function:ease-in-out;animation-iteration-count:infinite;animation-duration:10s;transform-origin:1243px 961.5px"><path id="_x3C_Path_x5F_ArmRight_x3E_" fill="#F89F71" d="M1267 686c-5 22-106 264-24 276 54 7 58-146 53-260-1-15-1-18 4-29s11-26 4-38-11-17-16-21-7-7-13 10c-2-5-8-14-15-17-5-3-4 4-1 7s5 12 5 24 0 25 3 30 2 8 0 18z"/><path id="_x3C_Path_x5F_HandShadow_x3E_" fill="#F68F5B" d="M1303 660s-4 5-11 5-20-6-21-21c0-6 2-11 3-10s5 16 9 19 6 0 9 3 4 5 11 4z"/><g id="_x3C_Group_x5F_Pencil_x5F_Front_x3E_"><path fill="#F9B4A7" d="M1344 683c-5-12-28-25-37-32l-2 8c6 4 29 23 39 24z"/><path fill="#FEEEE8" d="M1344 683l-9-11-5 5c5 3 10 6 14 6z"/><path fill="#F26D57" d="M1344 683l-3-4-2 3 5 1z"/></g><g id="_x3C_Group_x5F_Pencil_x5F_Back_x3E_"><path fill="#F26D57" d="M1246 610c1-2 2-1 3-1l-7-5h-4c-2 1-1 4 0 5l7 4 1-3z"/><path fill="#F9B4A7" d="M1274 627l-24-18s-3-1-4 1v4l27 19 1-6z"/></g></g><g id="_x3C_Group_x5F_Man_x5F_Face_x3E_" class="manhead" style="animation-name:head;animation-timing-function:ease-in-out;transform-origin:1117.293px 580.5px;animation-iteration-count:infinite;animation-duration:5s"><path fill="#F89F71" d="M1212 508c14 8 27 26 8 72s-45 63-77 28-33-55-8-89c24-34 47-29 77-11z"/><path id="_x3C_Path_x5F_Snor_x3E_" fill="#FFF" d="M1215 603c2-2 3-7-2-10s-8 1-11 4-7 4-10 4-8 3-1 4 20 4 24-2z"/><path fill="#FFF" d="M1175 557c0-12 10-16 5-23s-9-14-12-16-6-10 6-10 36 14 47 11 20-10 3-20-52-35-91-24c-12 4-16 12-17 15s-11 0-15 9-15 51-4 76c4 11 6 18 22 17 11-2 12 5 29-14 6-6 7-11 10-17 2-5 17-4 17-4z"/><path id="_x3C_Path_x5F_Nose_x3E_" fill="#F68E5A" d="M1219 569s-11 10-11 18 9 8 11 1 2-14 0-19z"/><g id="_x3C_Group_x5F_Glasses_x3E_"><path fill="#F26A56" d="M1209 551c-7 0-14 10-14 18s5 11 8 11 14-3 14-18c0-4-1-11-8-11zm-5 25c-3 0-5-1-5-7 0-9 6-14 10-14 2 0 5 0 5 7 0 8-7 14-10 14z"/><path fill="#F26D57" d="M1231 558c-3 0-7 3-11 9s-2 15 2 17c5 2 15-5 15-19 0-4-2-7-6-7zm-6 23c-2 0-3-3-3-5 0-7 6-14 9-14 1 0 2 1 2 4 0 7-5 15-8 15z"/><path fill="#F26A56" d="M1156 561l3-5c2-3 6-1 8-1l30 9v4l-28-9c-2-1-6-2-8 0l-3 4c-1 2-3 0-2-2zM1216 568h5l-1 3h-5z"/></g><path id="_x3C_Path_x5F_Beard-TOP_x3E_" fill="#FFF" d="M1166 602c-4 0-9 0-12 5s-6 11 5 16 13 9 17 15 13 13 22-2 10-24 8-27c0 0-4 4-12 5-9 1-20-11-28-12z"/></g></g></g><g class="stuffontable"><g id="L4_x5F_ScreenLamp" class="screenlamp" style="animation-name:veraslidein;animation-iteration-count:1;animation-duration:1.39s;animation-timing-function:ease-in-out;transform:translateX(45px)"><path fill="#F4827F" d="M1823 958l41-366-187-272 3-9 194 281-41 366z"/><path fill="#F8AFA3" d="M1681 464c-2 3-24 2-61-11-32-11-57-26-55-31 2-4 32-1 63 11 34 12 55 26 53 31z"/><ellipse cx="1868" cy="596" fill="#FFF" rx="9" ry="9"/><ellipse cx="1868" cy="596" fill="#F15E59" rx="4" ry="4"/><path fill="#F58D88" d="M1628 433l-8 20c37 13 59 14 61 11 2-5-19-19-53-31"/><path fill="#FEEBE8" d="M1618 430s-2 10 3 14 9 4 17-7c0 0-7-5-20-7z"/><path fill="#FAC2BA" d="M1680 344c-4-9 1-32 8-45 4-7 0-14-7-17-9-4-16 0-20 10s-6 31-25 41c-19 11-38 21-52 48s-19 42-19 42c2-5 32-2 63 10 34 12 55 26 53 31 0 0 10-33 11-48s4-25-12-72z"/><path fill="#FBCFC9" d="M1621 430l7 3c33 12 55 26 53 31 0 0 10-33 11-48s4-25-12-72c-4-9 1-32 8-45 4-7 0-14-7-17-9-4-16 0-20 10l-4 13s4 24 2 32c-4 14-28 10-36 56-3 14-2 37-2 37z"/><g id="_x3C_Group_x5F_SCREEN_x3E_"><path fill="#FFF" d="M1715 939c-5-5-41-60-47-70s-3-18-2-25l36-253c2-10 3-10 12-12 24-1 67 3 67 3 5 2 10 4 10 13-2 37-7 112-14 162a1897 1897 0 0 1-34 165c-6 22-8 24-15 26-4 2-10-5-13-9z"/><path fill="#FEE6DF" d="M1820 955l-42-149-16 67-19 60c-5 16-11 15-15 15 7-2 9-4 15-26 10-37 23-104 30-144 9-48 15-141 18-183 0-8-5-11-10-13 7 0 14 3 14 20 1 37-4 110-12 167l50 186h-13z"/><path fill="#FBCFC9" d="M1778 600l-71-8-30 215 61 71s15-66 24-121c16-89 16-157 16-157z"/><path fill="#F0504A" d="M1931 1000c0 12-43 32-104 32-43 0-118-18-118-40 0-17 51-39 116-39 35 0 106 32 106 47z"/><path fill="#F4827F" d="M1706 607l2-15 71 8-1 18-72-11z"/><path fill="#FAC1B8" d="M1684 760l8-59 74 34a1035 1035 0 0 1-14 78l-68-53zM1696 679l7-53 74 17-6 62-75-26z"/><path fill="#FDE6E3" d="M1701 719l18 9-5 39-19-12zM1731 733l18 9-8 45-17-13zM1740 648l20 4-5 34-19-5zM1709 640l21 5-5 33-19-6z"/><ellipse cx="1713" cy="601" fill="#FEF5F5" rx="1" ry="3"/><ellipse cx="1717" cy="602" fill="#FEF5F5" rx="1" ry="3"/><path fill="#FBCFC9" d="M1702 860c0 3-1 5-3 6-1 0-2-2-2-5s2-5 3-5c2-1 3 1 2 4z"/><path fill="#FDDFDB" d="M1851 963c0 5-10 9-23 9s-23-8-23-13c0-6 10-10 23-10s23 8 23 14z"/></g></g><g id="L4_x5F_Keyboard" class="keyboard" style="animation-name:veraslidein;animation-iteration-count:1;animation-duration:1.37s;animation-timing-function:ease-in-out;transform:translateX(45px)"><path fill="#FFF" d="M1574 913c6 0 13-1 20 11l43 85c4 7 5 13-7 17s-91 15-98 17-18 1-23-14-22-95-23-103 1-13 17-13h71z"/><path fill="#FDDFDB" d="M1511 1020a3001 3001 0 0 1-24-103c-2 2-2 5-2 9 2 8 19 87 24 103s16 15 23 14 86-13 98-17c6-2 9-5 9-8-12 4-98 15-105 16s-19 2-23-14z"/><path fill="#FBCFC9" d="M1560 922c4 0 8 0 13 7l30 66c3 4 1 11-7 13l-61 9c-5 0-12 1-15-10l-19-77c-2-8-2-9 13-9l46 1z"/><path fill="#F1625D" d="M1509 1029a3001 3001 0 0 1-24-110c-16 0-18 5-17 13 2 7 9 78 14 93 4 15 15 18 30 18l7-1c-4-2-8-6-10-13z"/></g><g id="L4_x5F_Cup" class="coffee" style="animation-name:veraslidein;animation-iteration-count:1;animation-duration:1.3s;animation-timing-function:ease-in-out;transform:translateX(45px)"><path fill="#FBD0C9" d="M1339 900l-6-2 2-21h-54c0 1 9 64 17 84 3 8 6 11 13 11s10-4 12-11l3-15c9 0 10-3 11-6l7-28c2-10-3-11-5-12zm1 9l-7 30c-1 2-4 2-6 2l6-39 4 1c4 2 3 4 3 6z"/><ellipse cx="1308" cy="877" fill="#F3726C" rx="27" ry="10"/><path fill="#2A475D" d="M1330 883c-5 2-13 4-22 4-8 0-15-1-20-3-4-2 5-6 20-6s25 3 22 5z"/><g id="_x3C_Group_x5F_Cup_x5F_Steam_x3E_"><path fill="#FFF5F3" d="M1308 862c2 0 9-5 9-16s-1-19-6-26-8-21-9-9c0 8 3 10 3 16-1 5-6 16-6 22s3 13 9 13z" class="steam ste1" style="animation-duration:4s"/><path fill="#FFF5F3" d="M1326 851c1 3-2 12-5 8-2-2 2-5 1-8-2-7 0-13 4 0z" class="steam ste2" style="animation-duration:4.8s"/></g></g><g id="L_x3F__x5F_PencilBox_x5F_TopLayer" class="pencils" style="animation-name:veraslidein;animation-iteration-count:1;animation-duration:1.3s;animation-timing-function:ease-in-out;transform:translateX(45px)"><path fill="#FFF" d="M1657 1080s-6-53-4-72h120c0 38-4 72-4 72h-112z"/><ellipse cx="1713" cy="1008" fill="#FBCFC9" rx="60" ry="22"/><g id="_x3C_Group_x5F_PencilPink_x3E_"><path fill="#F8AFA3" d="M1671 932s-6-1-8 3l-4-13c2-4 8-3 8-3l4 13"/><path fill="#FDDFDB" d="M1702 1029l-31-97s-6-1-8 3l30 93 9 1z"/></g><g id="_x3C_Group_x5F_PencilBlue_x3E_"><g fill="#17354C"><path d="M1696 930v-1M1683 916c5-6 9 0 9 0l4 13c-1 0-6-2-10 1l-3-14z"/></g><path fill="#F8AFA3" d="M1719 1029l-23-99s-6-3-10 0l22 99h11z"/></g></g></g></svg>








        

      

        
        <h2 class="quote" > ???It is not the language of painters but the language of nature which one should listen to, the
feeling for the things themselves, for reality, is more important than the feeling for pictures.??? <span> ??? Vincent Van Gogh  </span></h2>
    
        
        </div>
       
        
        <p>&nbsp;</p>

        <h1 class="explore"> Explore </h1>
      
        
        
        <div class= "filter-menu">

        <sl-button  @click=${() => gotoRoute('/artworks')} >Filter</sl-button>

  </div>
       

        
        
        <div class="artworks-grid">
            ${this.artworks == null ? html`
                <sl-spinner></sl-spinner>
            
            ` : html`
              ${this.artworks.map(artwork => html` 

              <va-artwork class="artwork-card"
              id="${artwork._id}"
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

     
      

      

      <footer>
    
    <div class="copyright"> <p> Copyright &copy;<script>document.write(new Date().getFullYear());</script> Designed &amp; Developed by Roann Mamedy, Heemesh, Yashna | All rights reserved </p></div>
    <div class="inner_footer">
      <!-- Logo for footer -->
      <div class="logo_container">
  <img src="images/logoblack.png">
      </div>
      <!-- about us -->
      <div class="footer_third">
    <h6 class="minititle">About Us</h6> <br>
    <h7 class="minitext">Creative artworks provides with the<br><br>
      selling and buying of artworks in Mauritius
    </h7>
  </div>
     
      
      <!-- website sections links -->
      <h6 class="minititle">Navigation</h6>
      <h7 class="minititle">
<a href="#">Home</a></li><br>
<a href="#">Sell</a></li><br>
<a href="#">Cart</a></li><br></h7>
      
      </div>
</footer>









     
    `
    render(template, App.rootEl)
  }
}

export default new HomeView()
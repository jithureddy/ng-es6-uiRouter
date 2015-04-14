export default class HomeController{
  //HomeService injected in app.js
  constructor(HomeService){
    //this = scope
    this.name = 'Friend'
    this.gifs = []
    
    HomeService.loadGifsJSON().then(postsJSON => {
      if (postsJSON && postsJSON.status == 200){
        let gifURLs = postsJSON.data.data.children
          .map(a => a.data.url)
          .filter(a => /gif$/.exec(a));

        this.gifs = gifURLs;
      }
    });
  }
}
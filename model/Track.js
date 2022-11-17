class Track{

    constructor(title, artistName, artistImage, albumName, albumImage, link){
        this.title = title;
        this.artistName = artistName;
        this.artistImage = artistImage;
        this.albumName = albumName;
        this.albumImage = albumImage
        this.link = link
    }
    
    render(container){
        let div = document.createElement('div');
        div.classList.add('trackcard');
        let content =   `<h3>${this.title}</h3> 
                        <h6>${this.artistName}</h6> 
                        <img src="${this.artistImage}"> 
                        <img src="${this.albumImage}">
                        <h6>${this.albumName}</h6>
                        <iframe title="deezer-widget" src="${this.link}" width="400" height="200" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>`;
        div.innerHTML = content;
        container.appendChild(div);

        //Las funciones de la tarjeta
    }

}
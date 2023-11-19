fetch("top50albums.json")
.then(Response=>Response.json())
.then(data=>implement(data))

function implement(data){
    let main_body = document.getElementById('mainbody');
    
    data.forEach(element => {
        let album_name = document.createElement('div');
      

    album_name.setAttribute("class", "albums");
        title = document.createElement('h1');
        title.classList.add("albumTitle")
        artist_name = document.createElement('h2');
        artist_name.classList.add("artistName");
        desc = document.createElement('p');
        desc.classList.add("albumDescription")
        year = document.createElement("i");
        year.classList.add("albumDate")
        albumdesc= document.createElement("div");
        albumdesc.classList.add("desccontainer")
        
       
        if("Image" in element){
            img = document.createElement('img');
            img.src = element.Image;
            img.classList.add("albumCover")
        album_name.appendChild(img);
        }
        else {
        img = document.createElement('img');
        img.src = 'https://www.kurin.com/wp-content/uploads/placeholder-square-300x300.jpg';
        album_name.appendChild(img);
    }
        title.textContent = element.Rank + ".    " + element.Album;
        artist_name.textContent = element.Artist;
        desc.textContent = element.Description;
        year.textContent= element.Info;
        albumdesc.appendChild(title);
        albumdesc.appendChild(artist_name);
        albumdesc.appendChild(year)
        albumdesc.appendChild(desc);
        album_name.appendChild(albumdesc);
        main_body.appendChild(album_name);
    });
}

import React from 'react'

export default ({albums,selectAlbum}) => (
  <div className="col-xs-10">
    <div className="albums">
        <h3>Albums</h3>
        <div className="row">
            { albums.map((album)=>{return(
              <div className="col-xs-4" key={album.id}>
                <a className="thumbnail" onClick = { () => selectAlbum(album.id)}>
                  <img src={album.imageUrl} />
                    <div className="caption">
                      <h5>
                      <span>{album.name}</span>
                      </h5>
                      <small>{album.songs.length}</small>
                    </div>
                </a>
              </div>
            )})}
        </div>
    </div>
  </div>
  
)
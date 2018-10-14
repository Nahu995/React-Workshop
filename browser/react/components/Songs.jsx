import React from 'react'

export default ({songs,start,currentSong,isPlaying,pause}) => (
  <table className='table'>
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Artists</th>
          <th>Genre</th>
        </tr>
      </thead>
      <tbody>
        {songs && songs.map((song)=>
        <tr key={song.id} className={song.id === currentSong ? 'active' : ''}>
          <td>
              {(currentSong.id !== song.id)?
              <button className="btn btn-default btn-xs" onClick={()=>start(song,songs)}>
              <span className="glyphicon glyphicon-play" ></span>
              </button>
              :
              <button className="btn btn-default btn-xs" onClick={pause}>
              <span className= "glyphicon glyphicon-pause"></span>
              </button>
              }
          </td>
          <td>{song.name}</td>
          <td>{song.artists.map(artist => artist.name).join(', ')}</td>
          <td>{song.genre}</td>
        </tr>
        
        )}
      </tbody>
    </table>
)
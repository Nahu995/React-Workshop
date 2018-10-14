import React,{Component} from 'react'
import Songs from './Songs.jsx'
export default class SingleAlbum extends Component{
  constructor(props){
    super(props)
  }
  render(){
    const {selectedAlbum,currentSong,start,pause,play,isPlaying} = this.props;
    return(
    <div className="col-xs-10">
    
    <div className="album">
    <div>
      <h3>{selectedAlbum.name}</h3>
      <img src={selectedAlbum.imageUrl} className="img-thumbnail" />
      </div>
    <Songs songs={selectedAlbum.songs} 
    start={start}
    play={play}
    pause={pause}
    currentSong={currentSong}
    isPlaying={isPlaying}/>
    </div>
    </div>
    )
  }
}
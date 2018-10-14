import React, {Component} from 'react'
import Sidebar from '../components/Sidebar.jsx'
import Footer from '../components/Footer.jsx'
import Albums from '../components/Albums.jsx';
import SingleAlbum from '../components/SingleAlbum'
import axios from 'axios'

const audio = document.createElement('audio');
export default class Main extends Component{
  constructor(){
    super()
      this.state = {
        albums:[],
        selectedAlbum:{},
        currentSong:{},
        currentSongList:{},
        isPlaying:false,
        progress:0,
      }
      this.selectAlbum = this.selectAlbum.bind(this)
      this.deselectAlbum = this.deselectAlbum.bind(this)
      this.start = this.start.bind(this)
      this.play = this.play.bind(this)
      this.pause = this.pause.bind(this)
      this.loadSong = this.loadSong.bind(this)
      this.next = this.next.bind(this)
      this.previous = this.previous.bind(this)
      this.next = this.next.bind(this)

  }
  componentDidMount () {
    axios.get('/api/albums')
    .then(res => res.data)
    .then(data => 
      this.setState({albums:data})
    )
    .catch(err => {
      console.error('error');
      console.error(err);
    })
  }
  selectAlbum(albumId) {
    axios.get(`/api/albums/${albumId}`)
      .then(res => res.data)
      .then(serverAlbum => this.setState({ selectedAlbum: serverAlbum }));
      audio.addEventListener('ended', () => {
        this.next();
      })
      audio.addEventListener('timeupdate', () => {
        this.setState({
          progress: (100 * audio.currentTime / audio.duration)
      });
      })
    }    

  deselectAlbum() {
    this.setState({selectedAlbum:{}})
  }
  start(song,songs){
    this.setState({
      currentSong:song,
      currentSongList:songs})
    this.loadSong(song.audioUrl)

  }
  loadSong(audioUrl){
    audio.src = audioUrl
    audio.load()
    this.play()
  }
  play(){
    audio.play();
    this.setState({isPlaying:true})
  }
  pause(){
    audio.pause()
    this.setState({isPlaying:false})
  }
  findSongIndex() {
    return this.state.currentSongList.findIndex(song => song.id === this.state.currentSong.id);
  }
  next() {
    let index = this.findSongIndex() + 1;
    if (index >= this.state.currentSongList.length) {
      index = 0 
    }
    const song = this.state.currentSongList[index];
    this.setState({ currentSong: song })
    this.loadSong(song.audioUrl)
  }
  previous() {
    let index = this.findSongIndex() - 1;
    if (index < 0) {
      index = this.state.currentSongList.length - 1 
    }
    const song = this.state.currentSongList[index];
    this.setState({ currentSong: song })
    this.loadSong(song.audioUrl)
  }
  render(){
    const {albums,selectedAlbum,currentSong,isPlaying,progress} = this.state;
    return(
      <div id="main" className="container-fluid">
        <Sidebar 
        deselectAlbum={this.deselectAlbum}/>
        { (!selectedAlbum.id) ?
        <Albums 
        albums={albums} 
        selectAlbum={this.selectAlbum}/>
        :
        <SingleAlbum 
        selectedAlbum={selectedAlbum} 
        // albums={albums}
        currentSong={currentSong}
        start={this.start}
        pause={this.pause}
        play={this.play}
        isPlaying={isPlaying}
        />
        }
        <Footer 
        pause={this.pause}
        play={this.play}
        isPlaying={isPlaying}
        currentSong={currentSong}
        next={this.next}
        previous={this.previous}
        progress={progress}
        />
      </div>
    )
  }
}
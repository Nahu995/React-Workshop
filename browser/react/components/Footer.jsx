import React,{Component} from 'react'

export default class Footer extends Component{
    render(){
      const {isPlaying,pause,play,currentSong,next,previous,progress}= this.props
        return(
          (currentSong.id)?
            <footer>
            <div className="pull-left">
              <button className="btn btn-default">
                <span className="glyphicon glyphicon-step-backward" onClick={previous}></span>
              </button>
              {(isPlaying)?
              <button className="btn btn-default" 
              onClick={pause}>
                <span className="glyphicon glyphicon-pause"></span>
              </button>
              :
              <button className="btn btn-default"
              onClick={play}>
                <span className="glyphicon glyphicon-play"></span>
                </button>
              }
              <button className="btn btn-default" onClick={next}>
                <span className="glyphicon glyphicon-step-forward"></span>
              </button>
            </div>
            <div className="bar">
              <div className="progress">
              <div className="progress-bar" style={{width: `${progress}%`}}></div>
              </div>
            </div>
          </footer> :
          null
        )
    }
}
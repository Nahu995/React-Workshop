import React,{Component} from 'react'

export default class Sidebar extends Component{
    render(){
        const {deselectAlbum} = this.props
        return(
            <div className="col-xs-2" >
                <sidebar>
                    <img src="juke.svg" className="logo" />
                    <section>
                        <h4 className="menu-item active">
                        <a onClick={()=>deselectAlbum()}>ALBUMS</a>
                        </h4>
                    </section>
                </sidebar>
            </div>
        )
    }
    
}
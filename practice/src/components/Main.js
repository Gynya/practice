import React from "react"
import First from "./First";
import Second from "./Second";
import Third from "./Third";
import Fouth from "./Fouth";
import Fifth from "./Fifth";
import Sixth from "./Sixth";

class Main extends React.Component {
    render () {
        return (
            <div>
                <First/>
                <Second photo={this.props.photo} beamer={this.props.beamer} paroms={this.props.paroms}/>
                <Third/>
                <Fouth  aero={this.props.aero}/>
                <Fifth/>
                <Sixth gif1={this.props.gif1} gif2={this.props.gif2} gif3={this.props.gif3}/>
            </div>
        )
    }
}

export default Main
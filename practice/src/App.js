import React from "react"
import Header from "./components/Header"
import Main from "./components/Main"
import photo from "./img/Hydrogen.jpg"
import beamer from "./img/beamer.jpg"
import paroms from "./img/paroms.jpg"
import aero from "./img/Aero.jpg"
import gif1 from "./img/gif1.gif"
import gif2 from "./img/gif2.gif"
import gif3 from "./img/gif3.jpg"

class App extends React.Component{

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (<div className="appClass">
            <Header title="Header site"/>
            <Main photo={photo} paroms={paroms} beamer={beamer} aero={aero} gif1={gif1} gif2={gif2} gif3={gif3}/>
        </div>)
    }
}
// class App extends React.Component{
//     constructor(props) {
//         super(props)
//         this.state = {
//             helpText: "Help Text!",
//             userData: "1"
//         }
//         this.inputClick = this.inputClick.bind(this)
//
//     }
//     render() {
//         return (<div className="divCl">
//             <Header title="Header site"/>
//             <h1>{this.state.helpText}</h1>
//             <h2>{this.state.userData}</h2>
//             <input placeholder={this.state.helpText}
//                    onChangeText={event => this.setState({userDate: event.target.value})}
//                    onClick={this.inputClick}
//                    onMouseEnter={this.mouseOver}
//             />
//             <p>{this.state.helpText === "Help Text!" ? "Yes" : "No"}</p>
//             <img src={Hydrogen} alt="Hydrogen"/>
//         </div>)
//     }
//
//     inputClick() {
//         this.setState({helpText: "Changed"})
//         console.log("Clicked")
//     }
//     mouseOver() {console.log('mouse over')}
// }
export default App

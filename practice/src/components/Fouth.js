import React from "react";

class Fouth extends React.Component {
    render () {
        return (
            <section className="section__only__top">
                <div className="container">
                    <div className="section__header section__header__up">
                        <h2 className="section__title">Designed for the green transition</h2>
                        <div>
                            <p className="section__text">Aero™ is designed for a variety of energy and propulsion solutions; traditional MGO, hybrid or zero-emission. The long slender hull is optimized to handle increased system weights, typically batteries, in an efficient manner. The flat surfaced roof area is perfect for installation of solar panels.</p>
                        </div>
                        <img className="image__aero" src={this.props.aero} alt=""/>
                    </div>
                </div>
            </section>
        )
    }
}

export default Fouth
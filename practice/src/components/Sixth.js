import React from "react";

class Sixth extends React.Component {
    render() {
        return (
            <section className="section">
                <div className="horiz__position">
                    <div className="temp">
                        <h3 className="section__suptitle text__centr">The Problem… Ferries Burn Diesel</h3>
                        <p className="section__text">The U.S. ferry fleet consists of ~1000 ferries, all burning diesel.

                            The average age of ferries in the U.S. is 27 years. Now is the time to replace old ferries and avoid building diesel vessels that will pollute for the next 30 years.

                            Ferries are critical transportation infrastructure and carry 126 million passengers and 27 million vehicles annually in the U.S. </p>
                    </div>
                    <div className="temp">
                        <img className="image__temp" src={this.props.gif1} alt=""/>
                    </div>
                </div>
                <div className="horiz__position">
                    <div className="temp">
                        <img className="image__temp" src={this.props.gif2} alt=""/>
                    </div>
                    <div className="temp">
                        <h3 className="section__suptitle text__centr">The Solution… Catalyze the Transition to Decarbonized Vessels</h3>
                        <p className="section__text">Build the first, prove the concept. The first domino paves a path to widespread industry adoption.

                            Existing technology, new application. Fuel cells and batteries are proven and widely used, just not yet in maritime.

                            Solidify the regulatory blueprint. Create the maritime hydrogen codes and standards necessary for industry adoption.</p>
                    </div>
                </div>
                <div className="horiz__position">
                    <div className="temp">
                        <h3 className="section__suptitle text__centr">Introducing the Sea Change, the World’s First Commercial Ferry Powered by Hydrogen Fuel Cells</h3>
                        <p className="section__text">SWITCH’s flagship zero-emissions vessel, the Sea Change, is a 75-passenger ferry powered by hydrogen fuel cells and batteries.

                            The vessel is substantially complete and entering operational sea trials at All American Marine shipyard in Bellingham, WA.  Sea Change will operate in the San Francisco Bay Area following delivery from the shipyard.</p>
                    </div>
                    <div className="temp">
                        <img className="image__temp" src={this.props.gif3} alt=""/>
                    </div>
                </div>
            </section>
        )
    }
}

export default Sixth
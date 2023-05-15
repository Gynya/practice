import React from "react";

class First extends React.Component {
    render () {
        return (
            <div className="main">
                <div className="intro">
                    <div className="container">
                        <div className="intro__inner">
                            <h2 className="intro__suptitle">Hydrogen technology</h2>
                            <h1 className="intro__title">Welcome to the new era</h1>
                            <a className="intro__btn" href="https://localhost:3000">Learn More</a>
                        </div>
                    </div>
                    <div className="intro__slider">
                        <div className="container">
                            <div className="slider__inner">
                                <div className="slider__item active"><span className="slider__num">01</span>
                                    Intro
                                </div>
                                <div className="slider__item"><span className="slider__num">02</span>
                                    Work
                                </div>
                                <div className="slider__item"><span className="slider__num">03</span>
                                    About
                                </div>
                                <div className="slider__item"><span className="slider__num">04</span>
                                    Contact
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default First
import React from "react";

class Second extends React.Component {
    render () {
        return (
            <section className="section">
                <div className="container">
                    <div className="section__header">
                        <h3 className="section__suptitle">What we do</h3>
                        <h2 className="section__title">Story about us</h2>
                        <div>
                            <p className="section__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Veritatis,
                                voluptas et dicta assumenda
                                tempora laborum delectus iusto adipisci, possimus neque tempore voluptatum fugit
                                veniam error,
                                quibusdam odio accusamus rerum natus.</p>
                        </div>
                    </div>
                    <div className="about">
                        <div className="about__item">
                            <div className="about__img">
                                <img src={this.props.paroms} alt="trans1" className="image"/>
                                <div className="about__text">Paroms</div>
                            </div>
                        </div>
                        <div className="about__item">
                            <div className="about__img">
                                <img src={this.props.beamer} alt="trans2" className="image"/>
                                <div className="about__text">Cars</div>
                            </div>
                        </div>
                        <div className="about__item">
                            <div className="about__img">
                                <img src={this.props.photo} alt="trans3" className="image"/>
                                <div className="about__text">Other</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Second
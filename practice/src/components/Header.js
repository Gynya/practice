import React from "react"

class Header extends React.Component {
    render () {
        return (
            <header className="header">
                <div className="container__header">
                    <div className="header__inner">
                        <div className="header__logo"></div>
                        <nav className="nav">
                            <a className="nav__link active" href="http://localhost:3000">About</a>
                            <a className="nav__link" href="http://localhost:3000">Transport</a>
                            <a className="nav__link" href="http://localhost:3000">Technology</a>
                            <a className="nav__link" href="http://localhost:3000">Work</a>
                            <a className="nav__link" href="http://localhost:3000">Contact</a>
                        </nav>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header
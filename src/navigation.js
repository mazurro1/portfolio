import React from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom';
import './sass/nav.scss';
import logo from './images/logo.png';

class Navigation extends React.Component {
    state = {
        menuActive: false,
    }

    handleBarClick = () => {

        this.setState(prevState => ({
            menuActive: !prevState.menuActive,
        }))
    }

    handleMenuClick = () => {
        this.setState(prevState => ({
            menuActive: !prevState.menuActive,
        }))
    }

    selectClass = () => {
        if (this.state.menuActive) {
            return 'bar_active';
        } else {
            return 'bar';
        }
    }

    render() {
        const { menuActive } = this.state;
        const classStyleBar = this.selectClass();



        return (
            <BrowserRouter>
                <div className="content">
                    <div className="row">
                        <div className="col-4">
                            <div className="logo">
                                <NavLink exact to="/"><img src={logo} alt="" /></NavLink>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="name">
                                Hubert Mazur
                            </div>
                        </div>
                        <div className="col-4">
                            <div className={classStyleBar} onClick={this.handleBarClick}>
                                <div className="all">
                                    <div className="first"></div>
                                    <div className="second"></div>
                                    <div className="third"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {menuActive && <Menu handleMenuClick={this.handleMenuClick} />}
            </BrowserRouter>
        )
    }
}

const Menu = ({ handleMenuClick }) => {
    return (
        <>
            <div className="menu">
                <NavLink exact to="/" onClick={handleMenuClick}>O mnie</NavLink>
                <NavLink to="/skills" onClick={handleMenuClick}>Umiejętności</NavLink>
                <NavLink to="/portfolio" onClick={handleMenuClick}>Portfolio</NavLink>
                <NavLink to="/contact" onClick={handleMenuClick}>Kontakt</NavLink>
            </div>
        </>
    )
}

export default Navigation;
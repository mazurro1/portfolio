import React from 'react';
import './sass/nav.scss';
import { NavLink } from 'react-router-dom';
import logo from './images/logo.png';

class Navigation extends React.Component {
    state = {

    }

    handleBarClick = () => {
        console.log('click');
    }

    render() {
        return (
            <div className="content">
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <div className="logo">
                                <img src={logo} alt="" />
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="name">
                                Hubert Mazur
                            </div>
                        </div>
                        <div className="col-4">
                            <NavLink className="bar" onClick={this.handleBarClick}>
                                <div className="all">
                                    <div className="first"></div>
                                    <div className="second"></div>
                                    <div className="third"></div>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navigation;
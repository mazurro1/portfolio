import React from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom';
import './sass/nav.scss';
import logo from './images/logo.png';

class Navigation extends React.Component {
    state = {
        menuActive: false,
    }

    navigations = [
        {
            id: 1,
            name: 'O mnie',
            exact: true,
            page: '/',
        },
        {
            id: 2,
            name: 'Umiejętności',
            exact: false,
            page: '/skills',
        },
        {
            id: 3,
            name: 'Portfolio',
            exact: false,
            page: '/portfolio',
        },
        {
            id: 4,
            name: 'Kontakt',
            exact: false,
            page: '/contact',
        },
    ]

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

                {menuActive && <div className="menu">{Menu(this.handleMenuClick, this.navigations)}</div>}

            </BrowserRouter >
        )
    }
}

const Menu = (handleMenuClick, navigations) => navigations.map(navigation => (
    <CreateNavigation key={navigation.id} handleMenuClick={handleMenuClick} name={navigation.name} page={navigation.page} exact={navigation.exact} />
));


const CreateNavigation = ({ name, page, exact, handleMenuClick }) => {
    return (
        <NavLink exact={exact} to={page} onClick={handleMenuClick}>{name}</NavLink>
    )
}

export default Navigation;
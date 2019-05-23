import React from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom';
import './sass/nav.scss';


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





    selectClass = () => {
        if (this.props.menuActive) {
            return 'bar_active';
        } else {
            return 'bar';
        }
    }

    render() {
        const { menuActive } = this.props;
        const classStyleBar = this.selectClass();



        return (
            <BrowserRouter>
                <div className="content">
                    <div className="row">
                        <div className="col-lg-10 col-10">
                            <div className="name">
                                <NavLink exact to="/">Hubert Mazur</NavLink>
                            </div>
                        </div>
                        <div className="col-lg-2 col-2">
                            <div className={classStyleBar} onClick={this.props.handleBarClick}>
                                <div className="all">
                                    <div className="first"></div>
                                    <div className="second"></div>
                                    <div className="third"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="selectMenu">
                    <div className="ring">
                        ring
                    </div>
                </div>
                {menuActive && <div className="menu">{Menu(this.props.handleMenuClick, this.navigations)}</div>}

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
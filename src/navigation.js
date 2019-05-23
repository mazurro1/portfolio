import React from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom';
import './sass/nav.scss';
import menu from './images/menuActive.png';
import tool from './images/toolActive.png';
import social from './images/social.png';


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
                {menuActive ?
                    <CreateToolInMenu
                        handleClickTool={this.props.handleMenuClickTool}
                        toolInMenuActive={this.props.toolInMenuActive}
                        menuInMenuActive={this.props.menuInMenuActive}
                        socialInMenuActive={this.props.socialInMenuActive}
                    />
                    : null}

                {menuActive ?
                    <CreateMenuBg
                        navigations={this.navigations}
                        handleMenuClick={this.props.handleMenuClick}
                        menuInMenuActive={this.props.menuInMenuActive}
                    /> : null}


            </BrowserRouter>
        )
    }
}

const CreateMenuBg = ({ menuInMenuActive, handleMenuClick, navigations }) => {
    return (
        <div className="menu">
            {menuInMenuActive ? Menu(handleMenuClick, navigations) : null}
        </div>
    )
}

const Menu = (handleMenuClick, navigations) => navigations.map(navigation => (
    <CreateNavigation key={navigation.id} handleMenuClick={handleMenuClick} name={navigation.name} page={navigation.page} exact={navigation.exact} />
));


const CreateNavigation = ({ name, page, exact, handleMenuClick }) => {
    return (
        <NavLink exact={exact} to={page} onClick={handleMenuClick}>{name}</NavLink>
    )
}

const CreateToolInMenu = ({ handleClickTool, menuInMenuActive, toolInMenuActive, socialInMenuActive }) => {
    const classRingMenu = () => {
        if (!menuInMenuActive) {
            return 'ring_active';
        }
        else {
            return 'ring';
        }
    }
    const classRingTool = () => {
        if (!toolInMenuActive) {
            return 'ring_active';
        }
        else {
            return 'ring';
        }
    }

    const classRingSocial = () => {
        if (!socialInMenuActive) {
            return 'ring_active';
        }
        else {
            return 'ring';
        }
    }

    return (

        <div className="row selectMenu">
            <div className={classRingMenu()} onClick={() => handleClickTool('menu')}>
                <img src={menu} alt="menu" />
            </div>
            <div className={classRingTool()} onClick={() => handleClickTool('tool')}>
                <img src={tool} alt="tool" />
            </div>
            <div className={classRingSocial()} onClick={() => handleClickTool('social')}>
                <img src={social} alt="social" />
            </div>
        </div >

    )
}

export default Navigation;
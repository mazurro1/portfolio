import React from 'react';
import { NavLink, Route } from 'react-router-dom';
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
            nameEn: 'About me',
            exact: true,
            page: '/',
        },
        {
            id: 2,
            name: 'Umiejętności',
            nameEn: 'Skills',
            exact: false,
            page: '/skills',
        },
        {
            id: 3,
            name: 'Portfolio',
            nameEn: 'Portfolio',
            exact: false,
            page: '/portfolio',
        },
        {
            id: 4,
            name: 'Kontakt',
            nameEn: 'Contact',
            exact: false,
            page: '/contact',
        },
    ]



    selectClass = () => {
        if (this.props.menuActive) {
            return `bar_active ${this.props.colorBg}`;
        } else {
            return `bar ${this.props.colorBg}`;
        }
    }

    render() {
        const { menuActive, colorBg, colorTxt, languagePl } = this.props;
        const classStyleBar = this.selectClass();



        return (
            <>
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
                        colorBg={colorBg}
                        colorTxt={colorTxt}

                    />
                    : null}
                {menuActive ?
                    <CreateMenuBg
                        navigations={this.navigations}
                        handleMenuClick={this.props.handleMenuClick}
                        menuInMenuActive={this.props.menuInMenuActive}
                        colorBg={colorBg}
                        languagePl={languagePl}
                    /> : null}

                <div className={`sectionName ${colorTxt}`}>
                    <Route exact path="/" render={() => (
                        <h1>
                            {languagePl ? 'O mnie' : 'About me'}
                        </h1>
                    )} />
                    <Route path="/skills" render={() => (
                        <h1>
                            {languagePl ? 'Umiejętności' : 'Skills'}
                        </h1>
                    )} />
                    <Route path="/portfolio" render={() => (
                        <h1>
                            {languagePl ? 'Portfolio' : 'Portfolio'}
                        </h1>
                    )} />
                    <Route path="/contact" render={() => (
                        <h1>
                            {languagePl ? 'Kontakt' : 'Contact'}
                        </h1>
                    )} />
                </div>

            </>
        )
    }
}




const CreateMenuBg = ({ menuInMenuActive, handleMenuClick, navigations, colorBg, languagePl }) => {
    return (
        <div className="menu">
            {menuInMenuActive ? Menu(handleMenuClick, navigations, colorBg, languagePl) : null}
        </div>
    )
}



const Menu = (handleMenuClick, navigations, colorBg, languagePl) => navigations.map(navigation => (
    <CreateNavigation key={navigation.id} handleMenuClick={handleMenuClick} name={navigation.name} page={navigation.page} exact={navigation.exact} colorBg={colorBg} languagePl={languagePl} nameEn={navigation.nameEn} />
));



const CreateNavigation = ({ colorBg, name, nameEn, page, exact, handleMenuClick, languagePl }) => {
    return (
        <>
            {languagePl ?
                <NavLink exact={exact} to={page} onClick={handleMenuClick} className={`${colorBg}`}>{name}</NavLink>
                :
                <NavLink exact={exact} to={page} onClick={handleMenuClick} className={`${colorBg}`}>{nameEn}</NavLink>}
        </>
    )
}


const CreateToolInMenu = ({ colorBg, colorTxt, handleClickTool, menuInMenuActive, toolInMenuActive, socialInMenuActive }) => {
    const classRingMenu = () => {
        if (!menuInMenuActive) {
            return `ring_active ${colorBg}`;
        }
        else {
            return `ring ${colorBg}`;
        }
    }
    const classRingTool = () => {
        if (!toolInMenuActive) {
            return `ring_active ${colorBg}`;
        }
        else {
            return `ring ${colorBg}`;
        }
    }
    const classRingSocial = () => {
        if (!socialInMenuActive) {
            return `ring_active ${colorBg}`;
        }
        else {
            return `ring ${colorBg}`;
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
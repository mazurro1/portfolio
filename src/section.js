import React from 'react';
import './sass/section.scss';
import { Switch, Route } from 'react-router-dom';
import AboutMe from './sectionComponents/aboutMe';
import Skills from './sectionComponents/skills';
import Portfolio from './sectionComponents/portfolio';
import Contact from './sectionComponents/contact';
import ErrorComponent from './sectionComponents/errorComponent';

class Section extends React.Component {
    state = {

    }

    routes = [
        {
            id: 1,
            path: "/",
            component: AboutMe,
            exact: true,
        },
        {
            id: 2,
            path: "/skills",
            component: Skills,
            exact: false,
        },
        {
            id: 3,
            path: "/portfolio",
            component: Portfolio,
            exact: false,
        },
        {
            id: 4,
            path: "/contact",
            component: Contact,
            exact: false,
        },
        {
            id: 5,
            path: null,
            component: ErrorComponent,
            exact: false,
        },
    ]


    render() {
        const { colorBg, colorTxt, arrowUpColor, languagePl } = this.props;
        const { routes } = this;
        return (
            <section>
                <CreateRoute
                    routes={routes}
                    colorBg={colorBg}
                    colorTxt={colorTxt}
                    arrowUpColor={arrowUpColor}
                    languagePl={languagePl}
                />
            </section>
        );
    }
}

const CreateRoute = ({ routes, colorBg, colorTxt, arrowUpColor, languagePl }) => {
    const allRoutes = routes.map(route =>
        <OneRoute
            key={route.id}
            path={route.path}
            Component={route.component}
            exact={route.exact}
            colorBg={colorBg}
            colorTxt={colorTxt}
            arrowUpColor={arrowUpColor}
            languagePl={languagePl}
        />)
    return (
        <Switch>
            {allRoutes}
        </Switch>
    )
}

const OneRoute = ({ arrowUpColor, path, Component, exact, colorBg, colorTxt, languagePl }) => {
    return (
        <Route
            path={path}
            exact={exact}
            render={(props) => <Component {...props} colorBg={colorBg} colorTxt={colorTxt} arrowUpColor={arrowUpColor} languagePl={languagePl} />}
        />
    )
}


export default Section;

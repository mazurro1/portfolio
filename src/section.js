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
        return (
            <section>
                <CreateRoute routes={this.routes} />
            </section>
        );
    }
}

const CreateRoute = ({ routes }) => {
    const allRoutes = routes.map(route => <OneRoute key={route.id} path={route.path} component={route.component} exact={route.exact} />)
    return (
        <Switch>
            {allRoutes}
        </Switch>
    )
}

const OneRoute = ({ path, component, exact }) => {
    return (
        <Route path={path} exact={exact} component={component} />
    )
}


export default Section;

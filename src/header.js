import React from 'react';
import './sass/header.scss';
import facebook from './images/facebook.png';
import messenger from './images/messenger.png';
import github from './images/github.png';
import linkedin from './images/linkedin.png';

class Header extends React.Component {
    state = {
        welcome: '',
        indexText: 0,
        iconsActive: false,
    }

    text = 'Witam w moim portfolio!';
    icons = [
        {
            id: 1,
            target: "_blank",
            image: facebook,
            link: 'https://www.facebook.com/Hubaa01',
            alt: 'facebook',
        },
        {
            id: 2,
            target: "_blank",
            image: messenger,
            link: 'https://web.facebook.com/messages/t/Hubaa01',
            alt: 'messenger',
        },
        {
            id: 3,
            target: "_blank",
            image: linkedin,
            link: 'https://www.linkedin.com/in/hubert-mazur-378a19113/',
            alt: 'linkedin',
        },
        {
            id: 4,
            target: "_blank",
            image: github,
            link: 'https://github.com/mazurro1',
            alt: 'github',
        },
    ];

    handleOnChangeText = e => {
        this.setState({
            welcome: e.target.value,
        })
    }

    componentDidMount() {

        this.indexInterval = setInterval(() => {
            this.setState(prevState => ({
                indexText: prevState.indexText + 1,
                welcome: prevState.welcome + this.text[prevState.indexText],
            }))

            if (this.state.indexText === this.text.length) {
                clearInterval(this.indexInterval);
            }
        }, 50)
    }

    componentWillUnmount() {
        clearInterval(this.indexInterval);
    }

    ClassIcons = () => {
        if (this.state.indexText === this.text.length) {
            return <CreateIcons icons={this.icons} />
        } else {
            return null
        }
    }

    render() {
        const { welcome } = this.state;
        const { menuActive } = this.props;
        return (

            <div className="header">
                <h1>{welcome}</h1>

                {menuActive ? <CreateForm welcome={this.state.welcome} clickChange={this.handleOnChangeText} /> : null}
                {menuActive ? this.ClassIcons() : null}
            </div>

        )
    }
}

const CreateIcons = ({ icons }) => {
    const createIcons = icons.map(icon => <NewIcon key={icon.id} target={icon.target} image={icon.image} link={icon.link} alt={icon.alt} />)
    return (

        <div className="icons">
            <div className="allIcons">
                <div className="row">
                    {createIcons}
                </div>
            </div>
        </div>

    )
}

const NewIcon = ({ target, image, link, alt }) => {
    return (
        <div className="col-md-3 col-sm-6 col-12 text-center">
            <a href={link} target={target}>
                <img src={image} alt={alt} />
            </a>
        </div>
    )
}

const CreateForm = ({ welcome, clickChange }) => {
    return (
        <form>
            <label htmlFor="welcomeText">
                <p>Wpisz swój tekst powitalny!</p>
                <input type="text" id="welcomeText" width="48" height="48" value={welcome} onChange={clickChange} />
            </label>
        </form>
    )
}



export default Header;
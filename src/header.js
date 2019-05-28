import React from 'react';
import './sass/header.scss';
import facebook from './images/facebook.png';
import messenger from './images/messenger.png';
import github from './images/github.png';
import linkedin from './images/linkedin.png';
import imgHeader1 from './images/header1.jpg';
import imgHeader2 from './images/header2.jpg';
import imgHeader3 from './images/header3.jpg';

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


    render() {
        const { welcome } = this.state;
        const { menuActive, socialInMenuActive, handleChangeImageNumber, color } = this.props;
        const choseBigImage =
            this.props.choseImage === 1 ? {
                background: `url(${imgHeader1}) center no-repeat`
            } :
                this.props.choseImage === 2 ? {
                    background: `url(${imgHeader2}) center no-repeat`
                } : {
                        background: `url(${imgHeader3}) center no-repeat`
                    };

        return (

            <div className="header" style={choseBigImage}>
                <h1 className={`${color}`}>{welcome}</h1>

                {menuActive ?
                    <IfMenuToolActive
                        choseImage={this.props.choseImage}
                        handleChangeImageNumber={handleChangeImageNumber}
                        welcome={this.state.welcome}
                        clickChange={this.handleOnChangeText}
                        toolInMenuActive={this.props.toolInMenuActive}
                    /> : null}
                {socialInMenuActive && menuActive ? <CreateIcons icons={this.icons} /> : null}
            </div>

        )
    }
}

const IfMenuToolActive = ({ welcome, clickChange, toolInMenuActive, handleChangeImageNumber, choseImage }) => {
    return (
        toolInMenuActive ? <CreateForm welcome={welcome} clickChange={clickChange} handleChangeImageNumber={handleChangeImageNumber} choseImage={choseImage} /> : null
    )
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

const CreateForm = ({ welcome, clickChange, handleChangeImageNumber, choseImage }) => {
    return (
        <form>
            <div className="row">
                <label htmlFor="welcomeText" className="col-12">
                    <p>Wpisz swój tekst powitalny</p>
                    <input type="text" id="welcomeText" width="48" height="48" value={welcome} onChange={clickChange} />
                </label>

                <label htmlFor="changeImage" className="col-12">
                    <p>Zmień zdjęcie główne</p>
                    <div className="buttons">
                        <button
                            className={choseImage === 1 ? "activeB" : ""}
                            onClick={(e) => handleChangeImageNumber(1, e)}>Image 1
                        </button>
                        <button
                            className={choseImage === 2 ? "activeB" : ""}
                            onClick={(e) => handleChangeImageNumber(2, e)}>Image 2</button>
                        <button
                            className={choseImage === 3 ? "activeB" : ""}
                            onClick={(e) => handleChangeImageNumber(3, e)}>Image 3</button>
                    </div>
                </label>

                <label htmlFor="changeColor" className="col-12">
                    <p>Zmień kolorystyke strony</p>
                    <input type="text" id="changeColor" width="48" height="48" value={welcome} onChange={clickChange} />
                </label>
            </div>
        </form>
    )
}



export default Header;
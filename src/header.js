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
    textEn = 'Welcome to my portfolio!'
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

    handleChangeLanguageWelcome = (language) => {
        if (language) {
            this.setState({
                welcome: this.text,
            })
        } else {
            this.setState({
                welcome: this.textEn,
            })
        }
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
        const { menuActive, socialInMenuActive, handleChangeImageNumber, colorBg, colorTxt, handleChangeColor, choseColor, languagePl, handleChangeLanguage } = this.props;

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
                <h1>{welcome}</h1>

                {menuActive ?
                    <IfMenuToolActive
                        choseImage={this.props.choseImage}
                        handleChangeImageNumber={handleChangeImageNumber}
                        welcome={this.state.welcome}
                        clickChange={this.handleOnChangeText}
                        toolInMenuActive={this.props.toolInMenuActive}
                        colorBg={colorBg}
                        colorTxt={colorTxt}
                        handleChangeColor={handleChangeColor}
                        choseColor={choseColor}
                        languagePl={languagePl}
                        handleChangeLanguage={handleChangeLanguage}
                        handleChangeLanguageWelcome={this.handleChangeLanguageWelcome}
                    /> : null}
                {socialInMenuActive && menuActive ? <CreateIcons icons={this.icons} /> : null}
            </div>

        )
    }
}

const IfMenuToolActive = ({ welcome, clickChange, toolInMenuActive, handleChangeImageNumber, choseImage, colorBg, colorTxt, handleChangeColor, choseColor, languagePl, handleChangeLanguage, handleChangeLanguageWelcome }) => {
    return (
        toolInMenuActive ?
            <CreateForm
                welcome={welcome}
                clickChange={clickChange}
                handleChangeImageNumber={handleChangeImageNumber} choseImage={choseImage}
                colorBg={colorBg}
                colorTxt={colorTxt}
                handleChangeColor={handleChangeColor}
                choseColor={choseColor}
                languagePl={languagePl}
                handleChangeLanguage={handleChangeLanguage}
                handleChangeLanguageWelcome={handleChangeLanguageWelcome}
            /> : null
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
        <div className="col-md-3 col-6 text-center">
            <a href={link} target={target}>
                <img src={image} alt={alt} />
            </a>
        </div>
    )
}

const CreateForm = ({ welcome, clickChange, handleChangeImageNumber, choseImage, colorBg, colorTxt, handleChangeColor, choseColor, languagePl, handleChangeLanguage, handleChangeLanguageWelcome }) => {
    return (
        <form>
            <div className="row">
                <label htmlFor="welcomeText" className="col-12">
                    <p className={`${colorTxt}`}>
                        {languagePl ? 'Wpisz swój tekst powitalny' : 'Enter your welcome text'}
                    </p>
                    <input type="text" id="welcomeText" width="48" height="48" value={welcome} onChange={clickChange} className={`${colorBg}`} />
                </label>

                <label htmlFor="changeImage" className="col-12">
                    <p className={`${colorTxt}`}>

                        {languagePl ? 'Zmień główne zdjęcie' : 'Change the main photo'}
                    </p>
                    <div className="buttons">
                        <button
                            className={choseImage === 1 ? `activeB` : `${colorTxt}`}
                            onClick={(e) => handleChangeImageNumber(1, e)}>

                            {languagePl ? 'Zdjęcie 1' : 'Image 1'}
                        </button>
                        <button
                            className={choseImage === 2 ? `${colorTxt} activeB` : `${colorTxt}`}
                            onClick={(e) => handleChangeImageNumber(2, e)}>
                            {languagePl ? 'Zdjęcie 2' : 'Image 2'}
                        </button>
                        <button
                            className={choseImage === 3 ? `${colorTxt} activeB` : `${colorTxt}`}
                            onClick={(e) => handleChangeImageNumber(3, e)}>
                            {languagePl ? 'Zdjęcie 3' : 'Image 3'}
                        </button>
                    </div>
                </label>

                <label htmlFor="changeColor" className="col-12">
                    <p className={`${colorTxt}`}>
                        {languagePl ? 'Zmień kolorystykę strony' : 'Change the color of the page'}
                    </p>
                    <div className="buttonsColor">
                        <button
                            className={choseColor === 'blue' ? `activeB` : `${colorTxt}`}
                            onClick={(e) => handleChangeColor(e, 'blue')}>
                            {languagePl ? 'Niebieski' : 'Blue'}
                        </button>
                        <button
                            className={choseColor === 'red' ? `activeB` : `${colorTxt}`}
                            onClick={(e) => handleChangeColor(e, 'red')}>
                            {languagePl ? 'Czerwony' : 'Red'}
                        </button>
                        <button
                            className={choseColor === 'green' ? `activeB` : `${colorTxt}`}
                            onClick={(e) => handleChangeColor(e, 'green')}>
                            {languagePl ? 'Zielony' : 'Green'}
                        </button>
                        <button
                            className={choseColor === 'gray' ? `activeB` : `${colorTxt}`}
                            onClick={(e) => handleChangeColor(e, 'gray')}>
                            {languagePl ? 'Pomarańczowy' : 'Orange'}
                        </button>
                    </div>
                </label>
                <label htmlFor="changeColor" className="col-12">
                    <p className={`${colorTxt}`}>
                        {languagePl ? 'Zmień język' : 'Change language'}
                    </p>
                    <div className="buttonsColor">
                        <button
                            className={languagePl ? `activeB` : `${colorTxt}`}
                            onClick={(e) => {
                                handleChangeLanguage(e, true)
                                handleChangeLanguageWelcome(true)
                            }
                            }>
                            {languagePl ? 'Polski' : 'Polish'}
                        </button>
                        <button
                            className={!languagePl ? `activeB` : `${colorTxt}`}

                            onClick={(e) => {
                                handleChangeLanguage(e, false)
                                handleChangeLanguageWelcome(false)
                            }}
                        >
                            {languagePl ? 'Angielski' : 'English'}
                        </button>
                    </div>
                </label>
            </div>
        </form>
    )
}



export default Header;
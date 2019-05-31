import React from 'react';
import './sass/app.scss';
import Navigation from './navigation';
import Header from './header';
import Footer from './footer';
import Section from './section';
import { BrowserRouter } from 'react-router-dom';
import arrowUpBlue from './images/arrowUpBlue.png';
import arrowUpRed from './images/arrowUpRed.png';
import arrowUpGreen from './images/arrowUpGreen.png';
import arrowUpGray from './images/arrowUpGray.png';



class App extends React.Component {


  state = {
    menuActive: false,
    menuInMenuActive: true,
    toolInMenuActive: false,
    socialInMenuActive: false,
    choseImage: 1,
    colorBg: "blueBg",
    colorTxt: "blueTxt",
    choseColor: 'blue',
    arrowUpColor: arrowUpBlue,
    languagePl: true,
  }


  handleChangeImageNumber = (index, e) => {
    e.preventDefault();
    this.setState({
      choseImage: index,
    });
  }

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

  handleMenuClickTool = (select) => {
    if (select === 'menu') {
      this.setState({
        menuInMenuActive: true,
        toolInMenuActive: false,
      })
    } else if (select === 'social') {
      this.setState(prevState => ({
        socialInMenuActive: !prevState.socialInMenuActive,
      }))
    } else if (select === 'tool') {
      this.setState({
        menuInMenuActive: false,
        toolInMenuActive: true,
      })
    }
  }

  handleChangeColor = (e, color) => {
    e.preventDefault();
    if (color === 'blue') {
      this.setState({
        choseColor: color,
        colorBg: "blueBg",
        colorTxt: "blueTxt",
        arrowUpColor: arrowUpBlue,
      })
    } else if (color === 'red') {
      this.setState({
        choseColor: color,
        colorBg: "redBg",
        colorTxt: "redTxt",
        arrowUpColor: arrowUpRed,
      })
    } else if (color === 'green') {
      this.setState({
        choseColor: color,
        colorBg: "greenBg",
        colorTxt: "greenTxt",
        arrowUpColor: arrowUpGreen,
      })
    } else {
      this.setState({
        choseColor: color,
        colorBg: "grayBg",
        colorTxt: "grayTxt",
        arrowUpColor: arrowUpGray,
      })
    }

  }

  handleChangeLanguage = (e, language) => {
    e.preventDefault();
    this.setState({
      languagePl: language,
    });
  }

  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <nav>
          <Navigation
            menuActive={this.state.menuActive}
            handleMenuClick={this.handleMenuClick}
            handleBarClick={this.handleBarClick}
            handleMenuClickTool={this.handleMenuClickTool}
            menuInMenuActive={this.state.menuInMenuActive}
            toolInMenuActive={this.state.toolInMenuActive}
            socialInMenuActive={this.state.socialInMenuActive}
            choseImage={this.state.choseImage}
            colorBg={this.state.colorBg}
            colorTxt={this.state.colorTxt}
            languagePl={this.state.languagePl}
          />
        </nav>
        <header>
          <Header
            menuActive={this.state.menuActive}
            toolInMenuActive={this.state.toolInMenuActive}
            socialInMenuActive={this.state.socialInMenuActive}
            choseImage={this.state.choseImage}
            handleChangeImageNumber={this.handleChangeImageNumber}
            colorBg={this.state.colorBg}
            colorTxt={this.state.colorTxt}
            handleChangeColor={this.handleChangeColor}
            choseColor={this.state.choseColor}
            languagePl={this.state.languagePl}
            handleChangeLanguage={this.handleChangeLanguage}
          />
        </header>
        <section>
          <Section
            colorBg={this.state.colorBg}
            colorTxt={this.state.colorTxt}
            arrowUpColor={this.state.arrowUpColor}
            languagePl={this.state.languagePl}
          />
        </section>
        <footer>
          <Footer
            languagePl={this.state.languagePl}
          />
        </footer>
      </BrowserRouter>
    );
  }
}

export default App;

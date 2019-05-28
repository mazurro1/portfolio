import React from 'react';
import './sass/app.scss';
import Navigation from './navigation';
import Header from './header';
import Footer from './footer';
import Section from './section';
import { BrowserRouter } from 'react-router-dom';


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
      })
    } else if (color === 'red') {
      this.setState({
        choseColor: color,
        colorBg: "redBg",
        colorTxt: "redTxt",
      })
    } else if (color === 'green') {
      this.setState({
        choseColor: color,
        colorBg: "greenBg",
        colorTxt: "greenTxt",
      })
    } else {
      this.setState({
        choseColor: color,
        colorBg: "grayBg",
        colorTxt: "grayTxt",
      })
    }

  }

  render() {
    return (
      <BrowserRouter >
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
          />
        </header>
        <section>
          <Section
            colorBg={this.state.colorBg}
            colorTxt={this.state.colorTxt}
          />
        </section>
        <footer>
          <Footer />
        </footer>
      </BrowserRouter>
    );
  }
}

export default App;

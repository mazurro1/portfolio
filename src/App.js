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
    color: "blue",
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

  render() {
    return (
      <BrowserRouter>
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

          />
        </nav>
        <header>
          <Header
            menuActive={this.state.menuActive}
            toolInMenuActive={this.state.toolInMenuActive}
            socialInMenuActive={this.state.socialInMenuActive}
            choseImage={this.state.choseImage}
            handleChangeImageNumber={this.handleChangeImageNumber}
            color={this.state.color}
          />
        </header>
        <section>
          <Section />
        </section>
        <footer>
          <Footer />
        </footer>
      </BrowserRouter>
    );
  }
}

export default App;

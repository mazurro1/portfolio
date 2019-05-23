import React from 'react';
import './sass/app.scss';
import Navigation from './navigation';
import Header from './header';
import Section from './section';
import Footer from './footer';


class App extends React.Component {
  state = {
    menuActive: false,
    menuInMenuActive: true,
    toolInMenuActive: false,
    socialInMenuActive: false,
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
      <>
        <nav>
          <Navigation
            menuActive={this.state.menuActive}
            handleMenuClick={this.handleMenuClick}
            handleBarClick={this.handleBarClick}
            handleMenuClickTool={this.handleMenuClickTool}
            menuInMenuActive={this.state.menuInMenuActive}
            toolInMenuActive={this.state.toolInMenuActive}
            socialInMenuActive={this.state.socialInMenuActive}
          />
        </nav>
        <header>
          <Header
            menuActive={this.state.menuActive}
            toolInMenuActive={this.state.toolInMenuActive}
            socialInMenuActive={this.state.socialInMenuActive}
          />
        </header>
        <section>
          <Section />
        </section>
        <footer>
          <Footer />
        </footer>
      </>
    );
  }
}

export default App;

import React from 'react';
import './sass/app.scss';
import Navigation from './navigation';
import Header from './header';
import Section from './section';
import Footer from './footer';


class App extends React.Component {
  state = {
    menuActive: false,
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

  render() {
    return (
      <>
        <nav>
          <Navigation menuActive={this.state.menuActive} handleMenuClick={this.handleMenuClick} handleBarClick={this.handleBarClick} />
        </nav>
        <header>
          <Header menuActive={this.state.menuActive} />
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

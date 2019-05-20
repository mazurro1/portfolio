import React from 'react';
import './sass/app.sass';
import Navigation from './navigation';
import Header from './header';
import Section from './section';
import Footer from './footer';


class App extends React.Component {
  render() {
    return (
      <>
        <nav>
          <Navigation />
        </nav>
        <header>
          <Header />
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

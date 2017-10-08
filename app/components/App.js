import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div id="content">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
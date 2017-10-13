import React, { Component } from 'react';
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div id="content">
        <Header />
        <LocaleProvider locale={enUS}>
          <Main />
        </LocaleProvider>
        <Footer />
      </div>
    );
  }
}

export default App;
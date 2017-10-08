import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

import { DatePicker } from 'antd';

export default class App extends Component {
  render() {
    return (
      <div id="content">
        <Header />
        <main>
          <DatePicker/>
        </main>
        <Footer />
      </div>
    );
  }
}

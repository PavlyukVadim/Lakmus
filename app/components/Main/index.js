import React, { Component } from 'react';
import MyTable from '../MyTable';

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main>
        <div className="container">
          <MyTable />
        </div>
      </main>
    );
  }
}

export default Main;

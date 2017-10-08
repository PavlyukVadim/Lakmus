import React, { Component } from 'react';
import { Table, Input, Button, Icon } from 'antd';
import columns from './tableColumnsConfig';

const source = {
  key: '1',
  name: 'Mike',
  phone: '+0 000 00 00 000',
  email: 'some.email@some.some',
  birthday: '01.01.1970',
  address: '10 Downing Street',
}

class Main extends Component {
  constructor(props) {
    super(props);
    const dataSource = [];
    let i = 0;
    for (; i < 20; i++) {
      dataSource[i] = Object.assign(source);
      dataSource[i].key = dataSource.lenght;
    } 
    this.state = {
      dataSource,
    }
  }

  render() {
    return (
      <main>
        <div className="container">
          <Input />
          <Table dataSource={this.state.dataSource} columns={columns} />  
        </div>
      </main>
    );
  }
}

export default Main;

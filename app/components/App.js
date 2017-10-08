import React, { Component } from 'react';
import { Table } from 'antd';
import Header from './Header';
import Footer from './Footer';

const source = {
  key: '1',
  name: 'Mike',
  phone: '+0 000 00 00 000',
  email: 'some.email@some.some',
  birthday: '01.01.1970',
  address: '10 Downing Street',
}

const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
}, {
  title: 'Phone',
  dataIndex: 'phone',
  key: 'phone',
}, {
  title: 'Email',
  dataIndex: 'email',
  key: 'email',
}, {
  title: 'Birthday',
  dataIndex: 'birthday',
  key: 'birthday',
}, {
  title: 'Address',
  dataIndex: 'address',
  key: 'address',
}];


export default class App extends Component {
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
      <div id="content">
        <Header />
        <main>
          <Table dataSource={this.state.dataSource} columns={columns} />
        </main>
        <Footer />
      </div>
    );
  }
}

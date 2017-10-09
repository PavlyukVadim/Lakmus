import React, { Component } from 'react';
import { Table, Input, Button, Icon } from 'antd';

const sources = [{
  key: '1',
  name: 'Mike',
  phone: '+0 000 00 00 000',
  email: 'some.email@some.some',
  birthday: '01.01.1970',
  address: '10 Downing Street',
},{
  key: '2',
  name: 'Mike',
  phone: '+0 000 00 00 000',
  email: 'some.email@some.some',
  birthday: '01.01.1970',
  address: '10 Downing Street',
},{
  key: '3',
  name: 'Mike',
  phone: '+0 000 00 00 000',
  email: 'some.email@some.some',
  birthday: '01.01.1970',
  address: '10 Downing Street',
}];


class MyTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterDropdownVisible: false,
      data: sources,
      searchText: '',
      filtered: false,
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }
  
  onInputChange(e) {
    this.setState({
      searchText: e.target.value,
    });
  }

  onSearch() {
    const { searchText } = this.state;
    const reg = new RegExp(searchText, 'gi');
    this.setState({
      filterDropdownVisible: false,
      filtered: !!searchText,
      data: sources.map((record) => {
        const match = record.name.match(reg);
        if (!match) {
          return null;
        }
        return record;
      }).filter(record => !!record),
    });
  }

  render() {
    const columns = [{
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      filterDropdown: (
        <div className="custom-filter-dropdown">
          <Input
            ref={ele => this.searchInput = ele}
            placeholder="Search name"
            value={this.state.searchText}
            onChange={this.onInputChange}
            onPressEnter={this.onSearch}
          />
          <Button type="primary" onClick={this.onSearch}>Search</Button>
        </div>
      ),
      filterIcon: <Icon type="smile-o" style={{ color: this.state.filtered ? '#108ee9' : '#aaa' }} />,
      filterDropdownVisible: this.state.filterDropdownVisible,
      onFilterDropdownVisibleChange: (visible) => {
        this.setState({
          filterDropdownVisible: visible,
        }, () => this.searchInput.focus());
      },
    }, {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    }, {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      filters: [{
        text: 'London',
        value: 'London',
      }, {
        text: 'New York',
        value: 'New York',
      }],
      onFilter: (value, record) => record.address.indexOf(value) === 0,
    }];
    return (
      <main>
        <div className="my-table">
          <Input />
          <Table columns={columns} dataSource={this.state.data} />
        </div>
      </main>
    );
  }
}

export default MyTable;

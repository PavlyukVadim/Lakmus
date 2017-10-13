import React, { Component } from 'react';
import { Table, Input, Button, Icon } from 'antd';

const sources = [{
  key: '1',
  name: 'Mike',
  gender: 'male',
  phone: '+0 000 00 00 000',
  email: 'some.email@some.some',
  birthday: '01.01.1970',
  address: '10 Downing Street',
},{
  key: '2',
  name: 'Mike',
  gender: 'female',
  phone: '+0 000 00 00 000',
  email: 'some.email@some.some',
  birthday: '01.01.1970',
  address: '10 Downing Street',
},{
  key: '3',
  name: 'Mike',
  gender: 'male',
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
    console.log('render');
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
    },  {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    }, {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender',
      filters: [{
        text: 'Male',
        value: 'male',
      }, {
        text: 'Female',
        value: 'female',
      }],
      onFilter: (value, record) => record.gender.indexOf(value) === 0,
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
      key: 'address'
    }];

    return (
      <main>
        <div className="my-table">
          <Table columns={columns} dataSource={this.state.data} />
        </div>
      </main>
    );
  }
}

export default MyTable;

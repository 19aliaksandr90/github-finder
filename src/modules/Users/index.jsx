import React, { Component } from 'react';
import axios from 'axios';

import SearchBar from '../../components/SearchBar';
import UsersList from '../../components/Users/UsersList';
import ALert from '../../components/Alert';

class Users extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      isLoading: false,
      alert: null,
    };
  }

  searchUsers = async (text) => {
    this.setState({ isLoading: true });
    const result = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`,
    );
    this.setState({ users: result.data.items, isLoading: false });
  };

  clearUsers = () => this.setState({ users: [] });

  setAlert = (message, type) => {
    this.setState({ alert: { message, type } });

    setTimeout(() => this.setState({ alert: null }), 2000);
  };

  render() {
    const { users, isLoading } = this.state;

    return (
      <div className="container">
        <ALert alert={this.state.alert} />
        <SearchBar
          searchUsers={this.searchUsers}
          clearUsers={this.clearUsers}
          showClearBtn={this.state.users.length > 0}
          setAlert={this.setAlert}
        />
        <UsersList isLoading={isLoading} users={users} />
      </div>
    );
  }
}

export default Users;

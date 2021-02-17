import React, { Component } from 'react';
import axios from 'axios';

import Navbar from './layouts/Navbar';
import SearchBar from './components/SearchBar';
import UsersList from './components/Users/UsersList';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      isLoading: false,
    };
  }

  searchUsers = async (text) => {
    this.setState({ isLoading: true });
    const result = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`,
    );
    this.setState({ users: result.data.items, isLoading: false });
  };

  render() {
    const { users, isLoading } = this.state;

    return (
      <div className="App">
        <Navbar title="Github Finder" icon="fab fa-github" />
        <div className="container">
          <SearchBar searchUsers={this.searchUsers} />
          <UsersList isLoading={isLoading} users={users} />
        </div>
      </div>
    );
  }
}

export default App;

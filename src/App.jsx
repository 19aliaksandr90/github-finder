import React, { Component } from 'react';
import axios from 'axios';

import Navbar from './layouts/Navbar';
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

  async componentDidMount() {
    this.setState({ isLoading: true });
    const result = await axios.get('https://api.github.com/users');
    this.setState({ users: result.data, isLoading: false });
  }

  render() {
    const { users, isLoading } = this.state;

    return (
      <div className="App">
        <Navbar title="Github Finder" icon="fab fa-github" />
        <div className="container">
          <UsersList isLoading={isLoading} users={users} />
        </div>
      </div>
    );
  }
}

export default App;

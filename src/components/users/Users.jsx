import React, { Component } from 'react';
import UserItem from './UserItem';

class Users extends Component {
  constructor() {
    super();
    this.state = {
      users: [
        {
          login: 'mojombo',
          id: 1,
          avatarUrl: 'https://avatars.githubusercontent.com/u/1?v=4',
          htmlUrl: 'https://github.com/mojombo',
        },
        {
          login: 'defunkt',
          id: 2,
          avatarUrl: 'https://avatars.githubusercontent.com/u/2?v=4',
          htmlUrl: 'https://github.com/defunkt',
        },
        {
          login: 'pjhyett',
          id: 3,
          avatarUrl: 'https://avatars.githubusercontent.com/u/3?v=4',
          htmlUrl: 'https://github.com/pjhyett',
        },
      ],
    };
  }

  render() {
    const { users } = this.state;

    return (
      <div className="grid-users-list">
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

export default Users;

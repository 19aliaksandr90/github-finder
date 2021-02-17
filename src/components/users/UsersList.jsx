import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Spinner from '../Spinner';
import UserItem from './UserItem';

class UsersList extends Component {
  render() {
    const { users, isLoading } = this.props;

    return (
      <div className="grid-users-list">
        {isLoading ? <Spinner /> : users.map((user) => <UserItem key={user.id} user={user} />)}
      </div>
    );
  }
}

UsersList.propTypes = {
  users: PropTypes.arrayOf,
  isLoading: PropTypes.bool,
};

export default UsersList;

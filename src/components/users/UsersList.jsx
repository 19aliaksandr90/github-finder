import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Spinner from '../Spinner';
import UserItem from './UserItem';

class UsersList extends Component {
  render() {
    const { users, isLoading } = this.props;

    return (
      <>
        {isLoading ? (
          <Spinner />
        ) : (
          <div className="grid-users-list">
            {users.map((user) => (
              <UserItem key={user.id} user={user} />
            ))}
          </div>
        )}
      </>
    );
  }
}

UsersList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      avatar_url: PropTypes.string,
      html_url: PropTypes.string,
      login: PropTypes.string,
    }),
  ),
  isLoading: PropTypes.bool,
};

export default UsersList;

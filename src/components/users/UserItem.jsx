import React from 'react';
import PropTypes from 'prop-types';

import './Users.css';

const UserItem = (props) => {
  const {
    user: { avatarUrl, login, htmlUrl },
  } = props;

  return (
    <div className="card text-center">
      <img src={avatarUrl} alt={login} className="round-img img-width" />
      <h3>{login}</h3>
      <div>
        <a href={htmlUrl} className="btn btn-dark btn-sm">
          More
        </a>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.shape({
    avatarUrl: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    htmlUrl: PropTypes.string.isRequired,
  }),
};

export default UserItem;

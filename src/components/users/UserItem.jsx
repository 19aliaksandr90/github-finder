/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const UserItem = (props) => {
  const {
    user: { avatar_url, login, html_url },
  } = props;

  return (
    <div className="card text-center">
      <img src={avatar_url} alt={login} className="round-img img-width" />
      <h3>{login}</h3>
      <div>
        <a href={html_url} className="btn btn-dark btn-sm">
          More
        </a>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.shape({
    avatar_url: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    html_url: PropTypes.string.isRequired,
  }),
};

export default UserItem;

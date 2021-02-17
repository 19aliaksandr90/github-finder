import React from 'react';
import PropTypes from 'prop-types';

const Alert = ({ alert }) =>
  alert !== null && (
    <div className={`alert alert-${alert.type}`}>
      <i className="fas fa-info-circle"> {alert.message}</i>
    </div>
  );

Alert.propTypes = {
  alert: PropTypes.shape({
    message: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }),
};

export default Alert;

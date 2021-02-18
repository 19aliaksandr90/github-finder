import React from 'react';
import PropTypes from 'prop-types';

const AppLayout = ({ navbar, children }) => (
  <div className="app-layout">
    {navbar}
    <div className="content-wrapper">{children}</div>
  </div>
);

AppLayout.propTypes = {
  navbar: PropTypes.node,
  children: PropTypes.node,
};

export default AppLayout;

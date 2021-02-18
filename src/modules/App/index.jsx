import React from 'react';
import PropTypes from 'prop-types';

import AppLayout from '../../layouts/AppLayout';
import Navbar from '../../components/Navbar';

const App = ({ children }) => (
  <AppLayout navbar={<Navbar title="Github Finder" icon="fab fa-github" />}>{children}</AppLayout>
);

App.propTypes = {
  children: PropTypes.node,
};

export default App;

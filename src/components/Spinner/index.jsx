import React from 'react';

import spinner from './spinner.gif';
import './style.css';

const Spinner = () => (
  <>
    <img className="spinner" src={spinner} alt="Loading ..." />
  </>
);

export default Spinner;

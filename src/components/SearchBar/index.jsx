import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
    };
  }

  onChange = (event) => this.setState({ [event.target.name]: event.target.value });
  onSubmit = (event) => {
    event.preventDefault();
    if (this.state.text === '') {
      this.props.setAlert('Please enter something', 'light');
    } else {
      this.props.searchUsers(this.state.text);
      this.setState({ text: '' });
    }
  };

  render() {
    const { showClearBtn, clearUsers } = this.props;

    return (
      <>
        <form className="form" onSubmit={this.onSubmit}>
          <input
            type="text"
            name="text"
            placeholder="Search users .."
            onChange={this.onChange}
            value={this.state.text}
          />
          <input type="submit" value="Search" className="btn btn-dark btn-block" />
        </form>
        {showClearBtn && (
          <button type="button" className="btn btn-light btn-block" onClick={clearUsers}>
            Clear
          </button>
        )}
      </>
    );
  }
}

SearchBar.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClearBtn: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired,
};

export default SearchBar;

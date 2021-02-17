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
    this.props.searchUsers(this.state.text);
    this.setState({ text: '' });
  };

  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        <input
          type="text"
          name="text"
          placeholder="Search users .."
          onChange={this.onChange}
          value={this.state.text}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
          disabled={this.state.text.length === 0}
        />
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchUsers: PropTypes.func.isRequired,
};

export default SearchBar;

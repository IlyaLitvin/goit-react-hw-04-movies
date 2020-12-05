import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Search extends Component {
  state = {
    value: "",
  };

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleChangeQuery(this.state.value);
  };

  render() {
    const { value } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className="SearchForm">
        <input
          type="text"
          value={value}
          onChange={this.handleChange}
          className="SearchForm-input"
        />
        <button type="submit" className="SearchForm-button">
          Search
        </button>
      </form>
    );
  }
}

import { Component } from 'react';

export default class SearchBar extends Component {
  state = {
    value: '',
  };

  handleValueChange = ({ target: { value } }) => {
    this.setState({ value });
  };

  handleSubit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.value);
    this.setState({ value: '' });
  };

  render() {
    return (
      <header>
        <form onSubmit={this.handleSubit}>
          <input
            autoComplete="off"
            autoFocus
            name="value"
            onChange={this.handleValueChange}
            placeholder="Search images and photos"
            type="text"
            value={this.state.value}
          />
          <button type="submit">Search</button>
        </form>
      </header>
    );
  }
}

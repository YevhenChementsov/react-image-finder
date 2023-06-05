import { Component } from 'react';

import { ReactComponent as SearchIcon } from 'icons/search.svg';
import { toast } from 'react-toastify';
import { SearchButton } from './SearchBar.styled';
export default class SearchBar extends Component {
  state = {
    value: '',
  };

  handleValueChange = ({ target: { value } }) => {
    this.setState({ value });
  };

  handleSubit = e => {
    e.preventDefault();

    if (this.state.value.trim() === '') {
      return toast.warning('No query entered yet...');
    }

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
          <SearchButton type="submit">
            <SearchIcon width="16" height="16" />
          </SearchButton>
        </form>
      </header>
    );
  }
}

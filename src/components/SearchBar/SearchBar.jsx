import { Component } from 'react';

import { ReactComponent as SearchIcon } from 'icons/search.svg';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { Button, Form, Header, Input } from './SearchBar.styled';
export default class SearchBar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    value: '',
  };

  handleValueChange = ({ target: { value } }) => {
    this.setState({ value });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.value.trim() === '') {
      return toast.warning('No query entered yet...');
    }

    this.props.onSubmit(this.state.value);
    this.setState({ value: '' });
  };

  render() {
    return (
      <Header>
        <Form onSubmit={this.handleSubmit}>
          <Button type="submit" aria-label="Search-button">
            <SearchIcon width="16" height="16" />
          </Button>
          <Input
            autoComplete="off"
            autoFocus
            name="value"
            onChange={this.handleValueChange}
            placeholder="Search images and photos"
            type="text"
            value={this.state.value}
          />
        </Form>
      </Header>
    );
  }
}

import { Component } from 'react';

import { ReactComponent as SearchIcon } from 'icons/search.svg';
import { toast } from 'react-toastify';
import { Header, Input, Button, Form } from './SearchBar.styled';
export default class SearchBar extends Component {
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
          <Button type="submit">
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
import { ChangeEvent, Component, FormEvent } from 'react';
import { toast } from 'react-toastify';

import SearchIcon from 'icons/search.svg?react';

import { Button, Form, Header, Input } from './SearchBar.styled';

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

interface SearchBarState {
  value: string;
}

export default class SearchBar extends Component<
  SearchBarProps,
  SearchBarState
> {
  state = {
    value: '',
  };

  handleValueChange = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    this.setState({ value });
  };

  handleSubmit = (e: FormEvent<HTMLFormElement>) => {
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

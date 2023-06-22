import { Component } from 'react';

import { RemoveScroll } from 'react-remove-scroll';
import { createPortal } from 'react-dom';
import { Backdrop, Content } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <Backdrop onClick={this.handleBackdropClick}>
        <RemoveScroll>
          <Content>{this.props.children}</Content>
        </RemoveScroll>
      </Backdrop>,
      modalRoot,
    );
  }
}

export default Modal;

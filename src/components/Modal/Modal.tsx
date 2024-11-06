import { Component, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { RemoveScroll } from 'react-remove-scroll';

import { Backdrop, Content } from './Modal.styled';

interface ModalProps {
  onClose: () => void;
  children?: ReactNode;
}

const modalRoot = document.querySelector('#modal-root') as HTMLElement;

export class Modal extends Component<ModalProps> {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (e: KeyboardEvent) => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
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

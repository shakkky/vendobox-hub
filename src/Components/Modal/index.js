import React from 'react';
import PropTypes from 'prop-types';
import { Modal as ReactstrapModal } from 'reactstrap';

import { Wrap, ModalHeader } from './styles';

const Modal = ({
  title = '',
  isOpen,
  handleToggle = () => {},
  children,
  ...rest
}) => {
  return (
    <div data-testid="modal">
      <Wrap isOpen={isOpen} toggle={handleToggle} {...rest}>
        {title && <ModalHeader>{title}</ModalHeader>}
        {children}
      </Wrap>
    </div>
  );
};

Modal.propTypes = {
  ...ReactstrapModal.propTypes,
  title: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  handleToggle: PropTypes.func.isRequired,
};

Modal.defaultProps = {
  title: null,
};

export default Modal;

export { default as ModalContent } from './ModalContent';
export { default as ModalActions } from './ModalActions';

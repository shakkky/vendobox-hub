import React from 'react';
import Button from '../../../../Components/Button';
import Modal, {
  ModalContent,
  ModalActions,
} from '../../../../Components/Modal';

const FileSizeModal = ({ isOpen, desc, toggleModal, handleSubmit }) => {
  return (
    <Modal
      title="Max file size reached"
      isOpen={isOpen}
      handleToggle={() => toggleModal()}
      backdrop="static"
    >
      <ModalContent>
        <p>{desc}</p>
      </ModalContent>

      <ModalActions>
        <Button
          style={{
            width: '100%',
          }}
          color="secondary"
          label="Okay"
          onClick={() => {
            toggleModal();
          }}
        />
      </ModalActions>
    </Modal>
  );
};

export default FileSizeModal;

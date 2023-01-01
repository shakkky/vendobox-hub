import React, { useState, useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import { debounce } from 'lodash';
import { ModalBody } from './reactstrap';
import styled from 'styled-components';
import { useMutation } from '@apollo/client';

import { useNotification } from 'HOC';

import { Button, Modal, ModalActions } from 'Components';
import { NoWrapFlexGrow } from 'Components/Typography';

function ConfirmationModal({
  body,
  cancelLabel,
  children,
  confirmLabel,
  disabled = false,
  mutation,
  mutationObject,
  mutationVariables,
  onMutationComplete,
  onMutationError,
  padAmount,
  refetch,
  successInfo,
  title,
  flexGrow,
}) {
  const { sendPageAlert } = useNotification();
  const [isOpen, setIsOpen] = useState(false);
  const onMutationCompleteWrapper = useCallback(
    data => {
      // const { mutationObject, sendPageAlert, successInfo } = this.props;
      if (!data || !data[mutationObject]) return false;

      setIsOpen(false);
      if (successInfo) sendPageAlert(successInfo);
      if (onMutationComplete) onMutationComplete(data);
      if (refetch) refetch();
    },
    [refetch, onMutationComplete, successInfo, mutationObject, sendPageAlert]
  );
  const reverseIsOpen = useCallback(() => setIsOpen(val => !val), []);
  const onMutationErrorWrapper = useCallback(
    (...args) => {
      setIsOpen(false);
      if (onMutationError) onMutationError(...args);
    },
    [onMutationError]
  );
  const [confirmMutation, { loading }] = useMutation(mutation, {
    variables: mutationVariables,
    onCompleted: onMutationCompleteWrapper,
    onError: onMutationErrorWrapper,
  });
  const handleActionConfirmation = useMemo(
    () => debounce(confirmMutation, 300),
    [confirmMutation]
  );

  return (
    <>
      <NoWrapFlexGrow flexGrow={flexGrow} onClick={!disabled && reverseIsOpen}>
        {children}
      </NoWrapFlexGrow>

      <Modal
        data-testid="confirmationModal"
        title={title}
        isOpen={isOpen}
        handleToggle={reverseIsOpen}
      >
        {body && <ModalBody>{body}</ModalBody>}
        <ModalActions padAmount={padAmount}>
          <ActionsWrapper body={body}>
            <Button
              disabled={loading}
              color="secondary"
              label={cancelLabel}
              onClick={reverseIsOpen}
            />
            <Button
              color="primary"
              disabled={loading}
              label={confirmLabel}
              onClick={handleActionConfirmation}
            />
          </ActionsWrapper>
        </ModalActions>
      </Modal>
    </>
  );
}

ConfirmationModal.propTypes = {
  mutationVariables: PropTypes.object.isRequired,
  mutation: PropTypes.object.isRequired,
  successInfo: PropTypes.string.isRequired,
  mutationObject: PropTypes.string.isRequired,
  title: PropTypes.string,
  body: PropTypes.object,
  confirmLabel: PropTypes.string,
  onMutationComplete: PropTypes.func,
  cancelLabel: PropTypes.string,
  onMutationError: PropTypes.func,
};

ConfirmationModal.defaultProps = {
  title: 'Are you sure?',
  body: null,
  confirmLabel: 'Yes, Delete',
  cancelLabel: 'No, Cancel',
  padAmount: 50,
};

export default ConfirmationModal;

const ActionsWrapper = styled.div`
  display: flex;
  padding-top: ${props => (props.body ? '0 !important' : '50px !important')};
  button {
    margin: 5px;
  }
`;

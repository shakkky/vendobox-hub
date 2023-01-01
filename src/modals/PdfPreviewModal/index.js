import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';

import Button from 'Components/Button';
import { Indicator as Loader } from 'Components';
import { ModalContent, ModalActions } from 'Components/Modal';
import { PdfModal, PdfFrame } from './styles';
import { useNotification } from 'HOC';
import { useQuery, gql } from '@apollo/client';
import { formatErrors } from 'AppGraphQL';

const PREVIEW_ELOA_QUERY = gql`
  query previewELOA($previewLoaParams: ELoaParams!) {
    previewELOA(preview_eloa_params: $previewLoaParams)
  }
`;

const PdfPreviewModal = ({
  isPdfPreviewModalOpen,
  handleToggleShowModal,
  loaParams,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [previewHtml, setPreviewHtml] = useState('');
  const { sendPageAlert } = useNotification();
  const formatError = useCallback(
    error => {
      sendPageAlert(formatErrors(null, error), 'error');
    },
    [sendPageAlert]
  );

  const previewLoaParams = loaParams;
  useQuery(PREVIEW_ELOA_QUERY, {
    variables: {
      previewLoaParams,
    },
    fetchPolicy: 'no-cache',
    onCompleted: data => {
      if (data.previewELOA) {
        const parsedHTML = data.previewELOA;
        setPreviewHtml(parsedHTML);
        return setIsLoading(false);
      }
      setIsLoading(false);
    },
    onError: formatError,
  });

  const handleChange = useCallback(() => {
    handleToggleShowModal(!isPdfPreviewModalOpen);
  }, [isPdfPreviewModalOpen, handleToggleShowModal]);

  const handleActionClose = useCallback(() => {
    handleToggleShowModal(false);
  }, [handleToggleShowModal]);

  return (
    <>
      <PdfModal
        title="E-LOA Preview"
        isOpen={isPdfPreviewModalOpen}
        handleToggle={handleChange}
        topPercent={5}
      >
        <ModalContent>
          {isLoading ? (
            <Loader size={1} />
          ) : (
            <PdfFrame dangerouslySetInnerHTML={{ __html: previewHtml }} />
          )}
          <ModalActions justify="center">
            <Button
              color="secondary"
              label="Close"
              onClick={handleActionClose}
            />
          </ModalActions>
        </ModalContent>
      </PdfModal>
    </>
  );
};

PdfPreviewModal.propTypes = {
  isPdfPreviewModalOpen: PropTypes.bool,
  handleToggleShowModal: PropTypes.func,
  loaParams: PropTypes.object,
};
PdfPreviewModal.defaultProps = {
  isPdfPreviewModalOpen: true,
  handleToggleShowModal: () => {},
  loaParams: {},
};

export default React.memo(PdfPreviewModal);

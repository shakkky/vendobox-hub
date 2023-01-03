import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { gql } from '@apollo/client';

import ApproveDownloadRequestModal from 'modals/ApproveDownloadRequest';
import ConfirmationModal from 'modals/Confirmation';
import { ActionClick } from 'Components/TableCell';
import { CellActions } from 'Components/TableCell';
import Copied from './Components/Copied';

const REVOKE_DOWNLOAD_APPROVAL = gql`
  mutation revokeDownloadApproval($params: RevokeDownloadApprovalInput!) {
    revokeDownloadApproval(params: $params) {
      id
    }
  }
`;

const Actions = ({ downloadRequest, refetch }) => {
  const [isCopiedToClipboard, setIsCopiedToClipboard] = useState(false);
  const { push } = useHistory();
  const { id, is_download_approved, download_link } = downloadRequest;

  const shouldDisableRevokeButton = !is_download_approved;

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(download_link);
    setIsCopiedToClipboard(true);
    setTimeout(() => setIsCopiedToClipboard(false), 3000);
  };

  return (
    <CellActions>
      <ActionClick
        icon="eye"
        title="View download request"
        onClick={() => push(`/download-request/${id}`)}
      />

      <ActionClick
        icon="file-copy"
        title="Copy link to clipboard"
        onClick={handleCopyToClipboard}
      />
      {isCopiedToClipboard && <Copied>Copied!</Copied>}

      <ApproveDownloadRequestModal
        downloadRequest={downloadRequest}
        refetch={refetch}
        disabled={!!is_download_approved}
      >
        <ActionClick
          icon="tick"
          title={!!is_download_approved ? '' : 'Approve'}
          disabled={!!is_download_approved}
          iconColor="success"
        />
      </ApproveDownloadRequestModal>

      <ConfirmationModal
        id={downloadRequest.id}
        mutation={REVOKE_DOWNLOAD_APPROVAL}
        successInfo="Access revoked"
        confirmLabel="Yes, Revoke"
        mutationVariables={{
          params: { download_request_id: downloadRequest.id },
        }}
        mutationObject="revokeDownloadApproval"
        onMutationComplete={refetch}
        disabled={shouldDisableRevokeButton}
      >
        <ActionClick
          icon="close"
          title={shouldDisableRevokeButton ? '' : 'Revoke Approval'}
          disabled={shouldDisableRevokeButton}
          iconColor="error"
        />
      </ConfirmationModal>
    </CellActions>
  );
};

export default Actions;

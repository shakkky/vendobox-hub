import React, { useCallback, useState, useEffect } from 'react';
import { isEmpty } from 'lodash';
import { withFormik } from 'formik';
import { compose } from 'recompose';
import * as yup from 'yup';
import { ModalBody } from 'reactstrap';
import styled from 'styled-components';
import { gql, useMutation, useLazyQuery } from '@apollo/client';

import { useNotification } from 'HOC';

import { Button, Modal, ModalActions } from 'Components';
import { NoWrap } from 'Components/Typography';
import ResumeCard from './Components/ResumeCard';

const APPROVE_DOWNLOAD_REQUEST = gql`
  mutation approveDownloadRequest($params: ApproveDownloadRequestInput!) {
    approveDownloadRequest(params: $params) {
      id
    }
  }
`;

const QUERY_RESUMES = gql`
  query queryResumes {
    resumes {
      resumes {
        id
        title
        version
        url
        created_at
      }
    }
  }
`;

const ApproveDownloadRequestModal = ({
  values,
  setFieldValue,
  errors,
  status,
  resetForm,
  validateForm,
  setStatus,
  children,
  disabled,
}) => {
  const { refetch } = values;

  const { sendPageAlert } = useNotification();
  const [isOpen, setIsOpen] = useState(false);
  const handleToggleModal = useCallback(() => {
    setIsOpen(currentValue => !currentValue);
    resetForm();
  }, [setIsOpen, resetForm]);

  const [queryResumes, { data }] = useLazyQuery(QUERY_RESUMES);

  useEffect(() => {
    if (isOpen) queryResumes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  const [selectedResume, setSelectedResume] = useState(null);

  const handleSetSelectedResume = useCallback(
    resume => {
      if (selectedResume?.id === resume?.id) {
        setSelectedResume(null);
        setFieldValue('selectedResume', false);
      } else {
        setSelectedResume(resume);
        setFieldValue('selectedResume', true);
      }
    },
    [selectedResume, setSelectedResume, setFieldValue]
  );

  const handleMutationCompleted = useCallback(
    data => {
      if (data.approveDownloadRequest) {
        setStatus('sent');
        setIsOpen(false);
        sendPageAlert('Success!');
        if (refetch) refetch();
      } else {
        setStatus('error');
      }
    },
    [setStatus, setIsOpen, sendPageAlert, refetch]
  );

  const [approveDownloadRequest] = useMutation(APPROVE_DOWNLOAD_REQUEST, {
    onCompleted: handleMutationCompleted,
  });

  const handleFormSubmit = useCallback(async () => {
    const formErrors = await validateForm();
    if (isEmpty(formErrors)) {
      setStatus('submitting');
      const variables = {
        params: {
          download_request_id: values.id,
          resume_id: selectedResume.id,
          resume_version: selectedResume.version,
        },
      };
      approveDownloadRequest({ variables });
    }
  }, [selectedResume, values, validateForm, setStatus, approveDownloadRequest]);

  const isSubmitting = status === 'submitting';
  const resumes = data?.resumes?.resumes ?? [];
  return (
    <>
      <NoWrap onClick={!disabled && handleToggleModal}>{children}</NoWrap>

      <Modal
        title="Approve Download Request"
        isOpen={isOpen}
        handleToggle={() => setIsOpen(false)}
      >
        <ModalBody>
          {resumes?.map(resume => (
            <ResumeCard
              key={resume.id}
              resume={resume}
              selected={selectedResume?.id === resume.id}
              setSelectedResume={handleSetSelectedResume}
            />
          ))}
          <ErrorText>{errors?.selectedResume}</ErrorText>
        </ModalBody>
        <ModalActions>
          <ActionsWrapper>
            <Button
              disabled={isSubmitting}
              color="secondary"
              label="Cancel"
              onClick={() => setIsOpen(false)}
            />
            <Button
              color="primary"
              disabled={isSubmitting}
              label="Confirm"
              onClick={handleFormSubmit}
            />
          </ActionsWrapper>
        </ModalActions>
      </Modal>
    </>
  );
};

const ActionsWrapper = styled.div`
  padding-top: 0 !important;
  button {
    margin: 5px;
  }
`;

const ErrorText = styled.div`
  font-size: 14px;
  color: #d11720;
  max-width: inherit;
`;

const enhanced = compose(
  withFormik({
    mapPropsToValues: props => {
      const { children, downloadRequest, refetch } = props;
      return {
        children,
        refetch,
        id: downloadRequest.id,
        selectedResume: false,
      };
    },
    validateOnChange: false,
    validationSchema: yup.object().shape({
      selectedResume: yup.bool().oneOf([true], 'Please make a selection'),
    }),
    handleSubmit: () => {},
  })
);

export default enhanced(ApproveDownloadRequestModal);

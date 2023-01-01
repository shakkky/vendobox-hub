import React, { useState, useCallback, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useMutation, gql } from '@apollo/client';
import ReactS3Uploader from 'react-s3-uploader';

import Tooltip from '../../Tooltip';
import { MAX_FILE_UPLOAD_SIZE, S3ACL } from '../../../constants';
import { formatByteSize } from '../../../Utils';
import {
  InputHidden,
  Wrapper,
  UploadImage,
  UploadButton,
  ErrorMessage,
  UploaderWrapper,
  Grow,
  PreviewImg,
  IconButton,
  Text,
  FilledVariantUpload,
} from './styles';
import image from './images/upload-button.svg';
import { getUserSession } from '../../../helper';
import FileSizeModal from './FileSizeModal/index';

const SIGN_FILE_FOR_UPLOAD = gql`
  mutation($doc: DocumentInformationInput!) {
    signedUpload: prepareDocumentForUpload(document: $doc) {
      signature
      bucket
      url
      policy
      key
      credentials
      expiration
      preSignedUrl
    }
  }
`;

function measureImage(file) {
  return new Promise(resolve => {
    if (!file) resolve({ height: -1, width: -1 });

    window.URL = window.webkitURL ?? window.URL; // Vendor prefixed in Chrome.

    const img = document.createElement('img');
    img.style.display = 'none'; // make sure we don't show the image

    img.addEventListener('load', function () {
      window.URL.revokeObjectURL(img.src); // Clean up object url in memory.
      const result = { height: img.height, width: img.width };
      img.remove(); // remove from the dom tree
      resolve(result);
    });
    img.src = window.URL.createObjectURL(file);
    document.body.appendChild(img);
  });
}

function FileUpload({
  onStartUpload,
  maxFileSize,
  document_type,
  product_type_id,
  note = null,
  accept,
  error,
  name,
  onError,
  onCompleted,
  removable = false,
  onRemove,
  s3_acl,
  variant = 'standard',
  setIsUploadingImages,
}) {
  const dataRef = useRef({
    dimensions: null,
    docUrl: null,
  });
  const [dimensions, setDimensions] = useState(null);
  const [file, setFile] = useState(null);
  const [docUrl, setDocUrl] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const [uploadError, setUploadError] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (setIsUploadingImages) {
      setIsUploadingImages(uploading);
    }
  }, [uploading, setIsUploadingImages]);

  const [mutate] = useMutation(SIGN_FILE_FOR_UPLOAD);
  const onUploadStartedWrapper = useCallback(() => {
    setUploading(true);
    if (onStartUpload) onStartUpload();
  }, [onStartUpload]);
  const onProgressChange = useCallback(progress => {
    if (progress > 0) {
      setProgress(progress);
      setUploadError(false);
    }
  }, []);
  const reset = useCallback(() => {
    setDimensions(null);
    setFile(null);
    setDocUrl(null);
    if (onRemove) onRemove();
  }, [onRemove]);
  const toggleModal = useCallback(() => setIsErrorModalOpen(val => !val), []);
  const processUpload = useCallback((data, callback) => {
    const {
      signedUpload: { preSignedUrl },
      signedUpload,
    } = data;

    const s3Data = {
      headers: signedUpload,
      signedUrl: preSignedUrl,
    };

    callback(s3Data);
    setDocUrl(signedUpload.url);
  }, []);
  const handleError = useCallback(
    error => {
      setUploadError(true);
      setProgress(0);
      setUploading(false);
      if (onError) onError(name, error.message);
    },
    [name, onError]
  );
  const signAndUpload = useCallback(
    async (file, callback) => {
      const user = getUserSession();
      onUploadStartedWrapper();
      setFile(file);

      if (document_type === 'PHOTO') {
        const { height, width } = await measureImage(file);
        setDimensions({ height, width });
      }

      mutate({
        variables: {
          doc: {
            user_id: user?.id ?? null,
            product_type_id,
            document_type,
            filename: file.name,
            filetype: file.type,
          },
        },
      })
        .then(({ data }) => processUpload(data, callback))
        .catch(handleError);
    },
    [
      onUploadStartedWrapper,
      document_type,
      product_type_id,
      processUpload,
      handleError,
      mutate,
    ]
  );

  const handleSuccess = useCallback(
    async data => {
      const { bucket, key } = data?.headers || {};
      const { file, docUrl, dimensions, name } = dataRef?.current;

      setProgress(0);
      setUploading(false);

      const onCompleteReturnArgs = {
        name,
        fileUrl: docUrl,
        file,
        bucket,
        key,
        width: dimensions?.width ?? null,
        height: dimensions?.height ?? null,
      };

      if (onCompleted) onCompleted({ ...onCompleteReturnArgs });
    },
    [onCompleted]
  );

  const onPreprocess = useCallback(
    (file, next) => {
      const fileBytes = file.size;
      if (fileBytes > maxFileSize) {
        setUploadError(true);
        setIsErrorModalOpen(true);
        return;
      }
      setUploadError(false);
      next(file);
    },
    [maxFileSize]
  );

  useEffect(() => {
    dataRef.current = {
      dimensions,
      docUrl,
      name,
      file,
    };
  }, [dimensions, docUrl, name, file]);

  return (
    <Wrapper error={uploadError} variant={variant}>
      <InputHidden type="hidden" value={docUrl} name={name} />
      <UploaderWrapper>
        <ReactS3Uploader
          name={name}
          getSignedUrl={signAndUpload}
          accept={accept}
          onError={handleError}
          onFinish={handleSuccess}
          onProgress={onProgressChange}
          preprocess={onPreprocess}
          uploadRequestHeaders={{
            'x-amz-acl': s3_acl,
          }}
          contentDisposition="auto"
        />
        <UploadButton>
          {variant !== 'filled' && (
            <UploadImage uploading={uploading} alt="Choose file" src={image} />
          )}
          {variant === 'filled' && (
            <FilledVariantUpload>Click here to Upload</FilledVariantUpload>
          )}
          {file && <Text>{file.name}</Text>}
          {progress > 0 && <Text>Uploaded {progress}%</Text>}
          {note && <Text>{note}</Text>}

          {error && (
            <ErrorMessage>
              <small>{error}</small>
            </ErrorMessage>
          )}
          {uploadError && <ErrorMessage>Failed to upload file</ErrorMessage>}
          <>
            <Grow />
            {document_type === 'PHOTO' && !uploading && dimensions && (
              <PreviewImg
                height={35}
                aspectRatio={
                  dimensions ? dimensions.width / dimensions.height : 1
                }
                src={docUrl}
              />
            )}
            {removable && (
              <Tooltip title="Remove">
                <IconButton type="clear" onClick={reset} />
              </Tooltip>
            )}
          </>
        </UploadButton>
      </UploaderWrapper>

      {isErrorModalOpen && (
        <FileSizeModal
          isOpen={isErrorModalOpen}
          desc={`Contract is over the ${formatByteSize(maxFileSize)}MB limit.`}
          toggleModal={toggleModal}
        />
      )}
    </Wrapper>
  );
}

FileUpload.propTypes = {
  name: PropTypes.string.isRequired, // name of field to be set
  document_type: PropTypes.string.isRequired,
  product_type_id: PropTypes.number,
  onStartUpload: PropTypes.func, // called when file upload about to begin
  onCompleted: PropTypes.func, // called when file upload successfully completed
  onError: PropTypes.func,
  error: PropTypes.string, // Error message
  accept: PropTypes.string, // Accepted mime type files,
  s3_acl: PropTypes.string.isRequired,
};

FileUpload.defaultProps = {
  product_type_id: null,
  maxFileSize: MAX_FILE_UPLOAD_SIZE,
  onStartUpload: () => {},
  onCompleted: () => {},
  onError: () => {},
  error: null,
  accept: 'application/pdf',
  s3_acl: S3ACL.PUBLIC,
  setIsUploadingImages: () => {},
};

export default FileUpload;

// const clear

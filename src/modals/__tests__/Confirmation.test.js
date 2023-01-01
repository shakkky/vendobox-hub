import React from 'react';
import { render } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { gql } from '@apollo/client';

import ConfirmationModal from '../Confirmation';

const setup = disabled => {
  const props = {
    disabled,
    title: 'The title',
    body: {},
    mutation: gql`
      mutation {
        someMutation {
          id
        }
      }
    `,
    cancelLabel: 'Cancel',
    confirmLabel: 'Confirm',
    mutationVariables: {},
    mutationObject: '',
    successInfo: '',
  };
  return render(
    <MockedProvider>
      <ConfirmationModal {...props} />
    </MockedProvider>
  );
};

describe('Confirmation modal', () => {
  it('Should render the modal', async () => {
    const { getByTestId } = setup(false);
    await expect(getByTestId('modal')).toBeInTheDocument();
  });
});

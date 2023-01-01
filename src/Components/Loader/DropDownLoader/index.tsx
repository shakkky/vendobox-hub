import React from 'react';

import { Wrapper } from './styles';

import Icon from '../../../Components/Icon';

const DropDownLoader = ({ ...props }) => (
  <Wrapper>
    <Icon type="circular-loader" color="secondary" {...props} />
  </Wrapper>
);

export default DropDownLoader;

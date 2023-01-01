import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  Skeleton,
  Field,
  Wrapper,
  SubWrapper,
  Label,
  SubLabel,
} from './styles';

const checkBoxStyles = theme => ({
  root: {
    '&$checked': {
      color: theme.colors.persian,
    },
  },
  checked: {},
});

const Checkbox = ({ onChange, loading, ...props }) => {
  return (
    <Wrapper {...props}>
      {loading && <Skeleton height={24} width={24} />}
      {!loading && <Field disableRipple onChange={onChange} {...props} />}
      <SubWrapper>
        <Label {...props}>{props.label}</Label>
        <SubLabel {...props}>{props.sublabel}</SubLabel>
      </SubWrapper>
    </Wrapper>
  );
};
export default withStyles(checkBoxStyles)(Checkbox);

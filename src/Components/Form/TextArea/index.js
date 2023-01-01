import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Field } from './styles';

const useStyles = makeStyles({
  inputRoot: {
    height: '100% !important',
    '& > div': {
      height: '100% !important',
    },
  },
});

const TextArea = props => {
  const { InputProps } = props;
  const classes = useStyles();
  const inputClasses = Object.assign({}, InputProps.classes || {}, {
    root: classes.inputRoot,
  });
  return (
    <Field {...props} InputProps={{ ...InputProps, classes: inputClasses }} />
  );
};

TextArea.defaultProps = {
  multiline: true,
  InputProps: {
    disableUnderline: true,
  },
  inputProps: {
    maxLength: 250,
  },
};

export default TextArea;

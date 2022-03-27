import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@mui/styles';

import { Button } from '@mui/material';

const useStyles = makeStyles({
  root: {
    fontFamily: '"Merriweather Sans", sans-serif',
    fontWeight: 900,
    borderRadius: 0,
    border: '5px solid',
    textTransform: 'none',
  },
});

function OutlinedButton({ text, ...props }) {
  const classes = useStyles();

  return (
    <Button
      className={classes.root}
      variant="outlined"
      color="secondary"
      {...props}
    >
      {text}
    </Button>
  );
}

OutlinedButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default OutlinedButton;

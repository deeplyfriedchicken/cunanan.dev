import React from 'react';

import { makeStyles } from '@mui/styles';

import { Theme, Typography } from '@mui/material';

export type TSectionHeading = {
  text: string;
  color?: 'primary' | 'secondary';
  size?: string;
};

const useStyles = makeStyles<Theme, Pick<TSectionHeading, 'color' | 'size'>>(
  (theme) => ({
    root: ({ color, size }) => ({
      fontWeight: 900,
      fontSize: size,
      color:
        color === 'secondary'
          ? theme.palette.secondary.main
          : theme.palette.primary.main,
      marginBottom: '2rem',
      [theme.breakpoints.down('xs')]: {
        textAlign: 'center',
      },
    }),
  }),
);

function SectionHeading({
  text,
  color = 'secondary',
  size = '48px',
}: TSectionHeading) {
  const classes = useStyles({ color, size });
  return (
    <Typography className={classes.root} variant="h2">
      {text}
    </Typography>
  );
}

export default SectionHeading;

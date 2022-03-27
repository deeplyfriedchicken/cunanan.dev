import React from 'react';

import { makeStyles } from '@mui/styles';
import { NavLink } from 'react-router-dom';
import { Link, Theme } from '@mui/material';

export type TMenuItem = {
  text: string;
  link?: string;
  exact?: boolean;
  useLink?: boolean;
  linkProps?: any;
};

const useStyles = makeStyles<Theme, Pick<TMenuItem, 'text'>>({
  root: ({ text }) => ({
    width: '150px',
    textTransform: 'uppercase',
    fontSize: '18px',
    textAlign: 'center',
    '& > a': {
      '&:first-child': {
        marginLeft: 0,
      },
      margin: '0 25px',
      textDecoration: 'none',
      color: 'inherit',
      '&.active': {
        color: 'inherit',
        fontWeight: 800,
        content: `"${text}"`,
      },
    },
    '&:hover a': {
      opacity: 0,
    },
    '&:hover::before': {
      position: 'absolute',
      fontWeight: 800,
      content: `"${text}"`,
    },
  }),
});

function MenuItem({
  link,
  text,
  exact = false,
  useLink = false,
  linkProps,
}: TMenuItem) {
  const classes = useStyles({ text });

  return (
    <li className={classes.root}>
      {useLink ? (
        <Link {...linkProps}>{text}</Link>
      ) : (
        <NavLink to={link} exact={exact} {...linkProps}>
          {text}
        </NavLink>
      )}
    </li>
  );
}

export default MenuItem;

import { makeStyles } from '@mui/styles';
import { AppBar, Hidden, IconButton, Toolbar, Theme } from '@mui/material';
import { useLocation } from 'react-router-dom';

import MenuIcon from '@mui/material/Menu';
import MenuItem from './MenuItem/MenuItem';
import { TFile } from '../../../interfaces';

export type TNavigation = {
  resume?: TFile;
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    boxShadow: theme.shadows[0],
    color: 'inherit',
    backgroundColor: 'inherit',
  },
  toolbar: {
    padding: 0,
    [theme.breakpoints.up('sm')]: {
      minHeight: '130px',
    },
  },
  linksContainer: {
    padding: 0,
    listStyle: 'none',
    fontFamily: '"Merriweather Sans", "Helvetica"',
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      width: '55%',
    },
    [theme.breakpoints.up('md')]: {
      width: '40%',
    },
    [theme.breakpoints.up('lg')]: {
      width: '30%',
    },
  },
}));

function Navigation({ resume }: TNavigation) {
  const classes = useStyles();
  const { pathname } = useLocation();

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <Hidden smUp>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon open />
          </IconButton>
        </Hidden>
        <Hidden xsDown>
          <ul className={classes.linksContainer}>
            <MenuItem text="Home" link="/" exact />
            <MenuItem text="About" link="/about" exact />
            <MenuItem text="Projects" link="/projects/float" />
            <MenuItem text="Contact" useLink linkProps={{ href: '#contact' }} />
            {pathname === '/' ? (
              <MenuItem
                text="About"
                useLink
                linkProps={{
                  href: '/#about',
                }}
              />
            ) : null}
            {resume?.url ? (
              <MenuItem
                text="Resume"
                useLink
                linkProps={{
                  href: resume?.url,
                  target: '_blank',
                }}
              />
            ) : null}
          </ul>
        </Hidden>
        <div />
      </Toolbar>
    </AppBar>
  );
}

export default Navigation;

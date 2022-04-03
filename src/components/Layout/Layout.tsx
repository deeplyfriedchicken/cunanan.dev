import { ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { Backdrop, Theme } from '@mui/material';
import Lottie from 'lottie-web-react';

import { IPage, IProject } from '../../interfaces';

export type TLayout = {
  children: ReactNode;
  loading: boolean;
  footer?: IPage;
  projects: IProject[];
};

const useStyles = makeStyles<Theme, Pick<TLayout, 'loading'>>((theme) => ({
  root: {
    height: '100%',
    backgroundColor: theme.palette.primary.light,
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: theme.palette.secondary.main,
  },
  container: ({ loading }) => ({
    visibility: loading ? 'hidden' : 'initial',
  }),
  lottieContainer: {
    height: '300px',
    width: '300px',
  },
}));

const defaultOptions = {
  loop: true,
  autoplay: true,
  path: 'https://assets8.lottiefiles.com/packages/lf20_cHA3rG.json',
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

function Layout({ children, loading, footer, projects }: TLayout) {
  const classes = useStyles({ loading });
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className={classes.root}>
      <Backdrop
        open={loading}
        transitionDuration={{
          appear: 0,
          enter: 500,
          exit: 500,
        }}
        className={classes.backdrop}
      >
        <div className={classes.lottieContainer}>
          <Lottie
            options={defaultOptions}
            height={300}
            width={300}
            isStopped={false}
            isPaused={false}
          />
        </div>
      </Backdrop>
      <div className={classes.container}>{children}</div>
    </div>
  );
}

export default Layout;

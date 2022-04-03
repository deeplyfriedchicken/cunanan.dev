import Lottie from 'lottie-web-react';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import MenuItem from '../Layout/Navigation/MenuItem/MenuItem';
import { ISite } from '../../interfaces';

import { ReactComponent as BlobSvg } from './blob.svg';
import { ReactComponent as SmallBlobSvg } from './small_blob.svg';

import { ReactComponent as ArrowSvg } from '../../assets/images/arrow.svg';

import classes from './LandingView.module.css';

export type TLandingView = {
  site: ISite | null;
};

function LandingView({ site }: TLandingView) {
  const homePage = site?.pages.find((page) => page.slug === 'home');
  const options = {
    loop: true,
    autoplay: true,
    path: homePage?.data?.lottie,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <div className={classes.grid}>
          <div className={classes.header}>
            <Typography variant="h1" sx={{ color: 'secondary.main' }}>
              kevin cunanan
            </Typography>
            <Typography
              className={classes.job_description}
              variant="h6"
              sx={{ color: 'secondary.main' }}
            >
              frontend engineer
            </Typography>
          </div>
          <div className={classes.list}>
            <ul>
              <li>frontend engineer</li>
              <li>verified cat enthusiast</li>
              <li>maker of cool things</li>
              <li>react subject matter expert</li>
            </ul>
          </div>
          <div id="ball" className={classes.ball}>
            <Typography
              variant="h6"
              sx={{ color: 'primary.main' }}
              className={classes.stringText}
            >
              maker of cool things
            </Typography>
            <Typography
              variant="h6"
              sx={{ color: 'primary.main' }}
              className={classes.ballText}
            >
              react subject matter expert
            </Typography>
            <Paper
              sx={{ bgcolor: 'primary.main' }}
              className={classes.string}
            />
            <Paper
              sx={{ bgcolor: 'primary.main' }}
              className={classes.circle}
            />
          </div>
          <nav className={classes.nav}>
            <ul className={classes.menu}>
              <MenuItem text="home" link="/landing" exact />
              <MenuItem text="about" link="/about" exact />
              <MenuItem text="projects" link="/projects/float" />
              <MenuItem text="contact" link="/contact" />
            </ul>
          </nav>
          <div className={classes.cat}>
            <Typography variant="h6" className={classes.catDescription}>
              verified cat enthusiast
            </Typography>
            <ArrowSvg className={classes.arrow} />
          </div>
          <div className={classes.lottieContainer}>
            <Lottie
              options={options}
              height={150}
              width={150}
              isStopped={false}
              isPaused={false}
            />
          </div>
          <div className={classes.swatches}>
            <span className={classes.pale_chestnut} />
            <span className={classes.laurel_green} />
            <span className={classes.wheat} />
            <span className={classes.charcoal} />
          </div>
          <div className={classes.location}>
            <Typography
              variant="h5"
              sx={{ color: 'secondary.main' }}
              className={classes.locationCurrentlyBased}
            >
              currently based in
            </Typography>
            <Typography variant="overline" className={classes.locationValue}>
              Los Angeles
            </Typography>
          </div>
          <div className={classes.cta}>
            <Button className={classes.button} variant="contained">
              check out my work
            </Button>
          </div>
        </div>
        <BlobSvg className={classes.blob} />
        <SmallBlobSvg className={classes.blob_right} />
      </Container>
    </div>
  );
}

export default LandingView;

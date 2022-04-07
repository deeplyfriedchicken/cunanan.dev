/** @jsxImportSource @emotion/react */
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Alert, Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { css } from '@emotion/react';
import MenuItem from '../Layout/Navigation/MenuItem/MenuItem';
import { ISite } from '../../interfaces';

import Swatch from '../Common/Swatch';
import Cat from '../Common/Cat';

import { ReactComponent as BlobSvg } from './blob.svg';
import { ReactComponent as SmallBlobSvg } from './small_blob.svg';

import { ReactComponent as ArrowSvg } from '../../assets/images/arrow.svg';

import classes from './LandingView.module.css';

export type TLandingView = {
  site: ISite | null;
};

function LandingView({ site }: TLandingView) {
  const theme = useTheme();

  return (
    <div className={classes.root}>
      <Alert css={css`position: relative; z-index: 20;`} severity="warning">Sorry! This site is still under construction; some buttons, pages, and links may not be fully operational for a bit.</Alert>
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
            <ul
              css={css`
                color: ${theme.palette.primary.main};
              `}
            >
              <li>frontend engineer</li>
              <li>verified cat enthusiast</li>
              <li>pipeline tinkerer</li>
              <li>react subject matter expert</li>
            </ul>
          </div>
          <div id="ball" className={classes.ball}>
            <Typography
              variant="h6"
              sx={{ color: 'primary.main' }}
              className={classes.stringText}
            >
              pipeline tinkerer
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
              <MenuItem text="home" link="/" exact />
              <MenuItem text="about" link="/about" exact />
              <MenuItem text="projects" link="/projects/float" />
              <MenuItem text="contact" link="/contact" />
            </ul>
          </nav>
          <div className={classes.cat}>
            <Typography
              variant="h6"
              className={classes.catDescription}
              sx={{ color: 'primary.main' }}
            >
              verified cat enthusiast
            </Typography>
            <ArrowSvg
              css={css`
                & path:first-of-type {
                  fill: ${theme.palette.svgs.arrow};
                }
                & path:last-of-type {
                  stroke: ${theme.palette.svgs.arrow};
                }
              `}
              className={classes.arrow}
            />
          </div>
          <div className={classes.lottieContainer}>
            <Cat />
          </div>
          <div className={classes.swatches}>
            <Swatch color="white" />
            <Swatch color="chestnut" />
            <Swatch color="green" />
            <Swatch color="wheat" />
            <Swatch color="charcoal" />
          </div>
          <div className={classes.location}>
            <Typography
              variant="h5"
              sx={{ color: 'primary.light' }}
              className={classes.locationCurrentlyBased}
            >
              currently based in
            </Typography>
            <Typography
              variant="overline"
              className={classes.locationValue}
              sx={{ color: 'primary.main' }}
            >
              Los Angeles
            </Typography>
          </div>
          <div className={classes.cta}>
            <Button className={classes.button} variant="contained">
              check out my work
            </Button>
          </div>
        </div>
        <BlobSvg
          css={css`
            fill: ${theme.palette.svgs.blob};
          `}
          className={classes.blob}
        />
        <SmallBlobSvg
          css={css`
            fill: ${theme.palette.svgs.blob};
          `}
          className={classes.blob_right}
        />
      </Container>
    </div>
  );
}

export default LandingView;

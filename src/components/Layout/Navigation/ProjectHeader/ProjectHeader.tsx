import { ReactNode } from 'react';
import { useParams } from 'react-router-dom';

import { makeStyles } from '@mui/styles';

import { Container, Theme, Typography } from '@mui/material';
import { IProject } from '../../../../interfaces';

export type TProjectHeader = {
  navigation: ReactNode;
  projects: IProject[];
};

const useStyles = makeStyles<Theme, IProject>({
  root: ({ header_color }) => ({
    backgroundColor: header_color,
    color: '#fff',
  }),
  container: {
    paddingBottom: '4rem',
  },
  name: {
    fontWeight: 600,
    fontSize: '36px',
    margin: '1rem 0',
  },
  heading: {
    fontWeight: 300,
    fontSize: '20px',
    letterSpacing: '6px',
  },
  headline: {
    fontWeight: 300,
    fontSize: '14px',
  },
});

function ProjectHeader({ navigation, projects }: TProjectHeader) {
  const { projectSlug } = useParams<{ projectSlug: string }>();
  const project = projects?.find((p) => p.slug === projectSlug);
  const classes = useStyles(project!);

  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        {navigation}
        <Typography className={classes.heading}>projects</Typography>
        <Typography className={classes.name}>{project?.name}</Typography>
        <Typography className={classes.headline}>
          {project?.headline}
        </Typography>
      </Container>
    </div>
  );
}

export default ProjectHeader;

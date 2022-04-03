import { Container } from '@mui/material';
import { Switch, Route } from 'react-router-dom';
import Navigation from '../Navigation';
import ProjectHeader from '../ProjectHeader/ProjectHeader';

import { IProject } from '../../../../interfaces';

export type THeaderNode = {
  projects: IProject[];
};

function HeaderNode({ projects }: THeaderNode) {
  return (
    <Switch>
      <Route
        path="/projects/:projectSlug"
        name="projects"
        render={() => (
          <ProjectHeader projects={projects} navigation={<Navigation />} />
        )}
      />
      <Route
        exact
        path="/"
        render={() => (
          <Container>
            <Navigation />
          </Container>
        )}
      />
    </Switch>
  );
}

export default HeaderNode;

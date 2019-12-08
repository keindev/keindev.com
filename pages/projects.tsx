import * as React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Menu from '../components/Menu';

const ProjectsPage = (): React.ReactElement => (
    <Container maxWidth="xl">
        <Menu />
        <Container maxWidth="lg">
            <Box my={4}>Projects</Box>
        </Container>
    </Container>
);

export default ProjectsPage;

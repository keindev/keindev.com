import * as React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Menu from '../components/Menu';

const HomePage = (): React.ReactElement => (
    <Container maxWidth="xl">
        <Menu />
        <Container maxWidth="lg">
            <Box my={4}></Box>
        </Container>
    </Container>
);

export default HomePage;

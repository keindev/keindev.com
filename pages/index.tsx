import * as React from 'react';
import { Typography, Box, Grid } from '@material-ui/core';
import SocialIcons from '../components/SocialIcons';
import WorkDesk from '../components/WorkDesk';
import theme from '../themes/dark';

const HomePage = (): React.ReactElement => (
    <React.Fragment>
        <Grid item>
            <Box textAlign="center">
                <Typography style={{ textShadow: theme.shadows[1] }} variant="h1">
                    Front-end developer, Designer & Open Sourcerer
                </Typography>
                <Box marginTop={2} color={theme.palette.text.secondary}>
                    <Typography variant="h2">
                        I code and design beautifully simple things, and I love what I do
                    </Typography>
                </Box>
            </Box>
        </Grid>

        <Grid item>
            <SocialIcons />
        </Grid>

        <Grid item>
            <WorkDesk />
        </Grid>
    </React.Fragment>
);

export default HomePage;

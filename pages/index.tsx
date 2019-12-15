import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { useTheme } from '@material-ui/core/styles';
import SocialIcons from '../components/SocialIcons';
import WorkDesk from '../components/WorkDesk';

const HomePage = (): React.ReactElement => {
    const theme = useTheme();

    return (
        <React.Fragment>
            <Grid item>
                <Box mt={8} textAlign="center">
                    <Typography style={{ textShadow: theme.shadows[1] }} variant="h1">
                        Front-end&nbsp;developer, Designer&nbsp;&&nbsp;Open&nbsp;Sourcerer
                    </Typography>
                    <Box mt={2}>
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
};

export default HomePage;

import * as React from 'react';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import SocialIcons from '../components/SocialIcons';
import WorkDesk from '../components/WorkDesk';

const useStyles = makeStyles(theme => ({
    header: {
        textShadow: theme.shadows[1],
    },
    iconsWrapper: {
        alignItems: 'center',
    },
    headerWrapper: {
        alignItems: 'flex-end',
    },
    flexColumn: {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 1,
        display: 'flex',
    },
}));

const HomePage = (): React.ReactElement => {
    const { header, iconsWrapper, headerWrapper, flexColumn } = useStyles();

    return (
        <React.Fragment>
            <Grid className={clsx(flexColumn, headerWrapper)} item>
                <Box mt={2} textAlign="center">
                    <Typography className={header} variant="h1">
                        Front-end developer, Designer & Open&nbsp;Sourcerer
                    </Typography>
                    <Box mt={2}>
                        <Typography variant="h2">
                            I code and design beautifully simple things, and I love what I do
                        </Typography>
                    </Box>
                </Box>
            </Grid>

            <Grid className={clsx(flexColumn, iconsWrapper)} item>
                <Box m={2}>
                    <SocialIcons />
                </Box>
            </Grid>

            <Grid container>
                <WorkDesk />
            </Grid>
        </React.Fragment>
    );
};

export default HomePage;

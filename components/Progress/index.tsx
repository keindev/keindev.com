import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
    '@keyframes rotate': {
        '100%': { transform: 'rotate(360deg)' },
    },
    progress: {
        '&:before': {
            fontSize: '.5rem',
            borderStyle: 'solid',
            borderColor: theme.palette.secondary.light,
            borderWidth: '.1rem .1rem 0 0',
            boxShadow: `.05rem .05rem .05rem .05rem ${theme.palette.secondary.contrastText}`,
            borderRadius: '4rem',
            width: '6rem',
            height: '6rem',
            animation: '$rotate 1s infinite linear',
            content: '""',
            display: 'flex',
            position: 'relative',
            top: '-3rem',
        },
    },
}));

const Progress: React.FC = () => {
    const classes = useStyles();

    return <Box className={classes.progress}></Box>;
};

export default Progress;

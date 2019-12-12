import * as React from 'react';
import { AppBar, Toolbar, Box, MenuItem, makeStyles } from '@material-ui/core';
import Link from '../Link';
import MenuLink from './MenuLink';
import MenuButton from './MenuButton';

const useStyles = makeStyles(theme => ({
    wrapper: {
        [theme.breakpoints.down('xs')]: {
            display: 'none',
        },
        paddingTop: '1.5em',
    },
}));

const Menu = (): React.ReactElement => {
    const classes = useStyles();

    return (
        <AppBar position="static" elevation={0}>
            <Box py={4}>
                <Toolbar variant="dense">
                    <Box flexGrow={1}>
                        <Link href="/">
                            <img src="images/logo.svg" alt="logo" style={{ width: 160, height: 'auto' }} />
                        </Link>
                    </Box>

                    <MenuButton>
                        <MenuItem>Login</MenuItem>
                        <MenuItem>
                            <MenuLink label="Design" href="/design" />
                        </MenuItem>
                    </MenuButton>

                    <Box className={classes.wrapper}>
                        <MenuLink label="Home" href="/" />
                        <MenuLink label="Blog" href="https://medium.com/@keindev" prefetch={false} />
                        <MenuLink label="Design" href="/design" />
                        <MenuLink label="Projects" href="/projects" />
                        <MenuLink label="Skills" href="/skills" />
                    </Box>
                </Toolbar>
            </Box>
        </AppBar>
    );
};

export default Menu;

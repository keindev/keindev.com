import * as React from 'react';
import { AppBar, Toolbar, Box } from '@material-ui/core';
import theme from '../../themes/dark';
import MenuLink from '../MenuLink';
import Link from '../Link';

const Menu = (): React.ReactElement => (
    <Box my={4} display="flex">
        <AppBar position="static" elevation={0}>
            <Toolbar variant="dense">
                <Box flexGrow={1}>
                    <Link href="/">
                        <img src="images/logo.svg" alt="logo" style={{ width: 160, height: 'auto' }} />
                    </Link>
                </Box>

                <Box style={{ paddingTop: '1.5em' }} color={theme.palette.text.primary}>
                    <MenuLink label="Home" href="/" />
                    <MenuLink label="Blog" href="https://medium.com/@keindev" prefetch={false} />
                    <MenuLink label="Design" href="/design" />
                    <MenuLink label="Projects" href="/projects" />
                    <MenuLink label="Skills" href="/skills" />
                </Box>
            </Toolbar>
        </AppBar>
    </Box>
);

export default Menu;

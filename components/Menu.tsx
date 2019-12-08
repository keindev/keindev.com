import * as React from 'react';
import { AppBar, Toolbar, Typography, Box, SvgIcon } from '@material-ui/core';
import MenuLink from './MenuLink';
import Logo from '../public/images/logo.svg';
import Link from './Link';

const Menu = (): React.ReactElement => (
    <Box my={3} display="flex">
        <AppBar position="static" elevation={0}>
            <Toolbar variant="dense">
                <Box flexGrow={1}>
                    <Link href="/">
                        <SvgIcon component={Logo} viewBox="0 0 160 57" style={{ width: 160, height: 57 }} />
                    </Link>
                </Box>

                <Typography variant="h6" color="inherit">
                    <MenuLink label="Home" href="/" />
                    <MenuLink label="Blog" href="https://medium.com/@keindev" prefetch={false} />
                    <MenuLink label="Design" href="/design" />
                    <MenuLink label="Projects" href="/projects" />
                    <MenuLink label="Skills" href="/skills" />
                </Typography>
            </Toolbar>
        </AppBar>
    </Box>
);

export default Menu;

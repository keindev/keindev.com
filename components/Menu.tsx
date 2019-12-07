import * as React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import Link from './Link';

const Menu = (): React.ReactElement => (
    <Box my={3}>
        <AppBar position="static" elevation={0}>
            <Toolbar variant="dense">
                <Typography variant="h6" color="inherit">
                    <Link href="/" color="secondary">
                        Home
                    </Link>
                    <Link href="https://medium.com/@keindev" color="secondary">
                        Blog
                    </Link>
                    <Link href="/design" color="secondary">
                        Design
                    </Link>
                    <Link href="/projects" color="secondary">
                        Projects
                    </Link>
                    <Link href="/skills" color="secondary">
                        Skills
                    </Link>
                </Typography>
            </Toolbar>
        </AppBar>
    </Box>
);

export default Menu;

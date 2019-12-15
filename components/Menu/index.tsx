import * as React from 'react';
import { useRouter } from 'next/router';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import clsx from 'clsx';
import Link from '../Link';
import Button from '../Button';

const useStyles = makeStyles(theme => ({
    logo: {
        width: 160,
        height: 'auto',
        display: 'block',
    },
    menu: {
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
        marginTop: 20,
        marginRight: -20,
    },
    menuButton: {
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
        marginTop: 20,
    },
    menuItem: {
        color: theme.palette.text.primary,
        textDecoration: 'none',
        textTransform: 'none',
        paddingLeft: 20,
        paddingRight: 20,

        '&:hover': {
            color: theme.palette.common.white,
            textDecoration: 'none',
        },
    },
    menuItemActive: {
        color: theme.palette.common.white,
        fontWeight: 600,
        textShadow: theme.shadows[24],
    },
}));

const links = [
    ['Home', '/'],
    ['Blog', 'https://medium.com/@keindev'],
    ['Design', '/design'],
    ['Projects', '/projects'],
    ['Skills', '/skills'],
];

const MainMenu = (): React.ReactElement => {
    const [anchorEl, handleMenu] = React.useState<(EventTarget & HTMLButtonElement) | null>(null);
    const { logo, menu, menuButton, menuItem, menuItemActive } = useStyles();
    const { route } = useRouter();

    React.useEffect(() => {
        const handleResize = (): void => handleMenu(null);

        window.addEventListener('resize', handleResize);

        return (): void => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <AppBar position="static" elevation={0}>
            <Box py={2}>
                <Toolbar variant="dense">
                    <Box flexGrow={1}>
                        <Link href="/">
                            <img className={logo} src="images/logo.svg" alt="logo" />
                        </Link>
                    </Box>

                    <Box className={menuButton}>
                        <IconButton aria-label="menu" onClick={(event): void => handleMenu(event.currentTarget)}>
                            <MenuRoundedIcon />
                        </IconButton>

                        <Menu
                            anchorEl={anchorEl}
                            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                            open={Boolean(anchorEl)}
                            onClose={(): void => handleMenu(null)}
                            onClick={(): void => handleMenu(null)}
                        >
                            {links.map(([label, href]) => (
                                <MenuItem key={label}>
                                    <Link href={href} className={clsx(menuItem, { [menuItemActive]: route === href })}>
                                        {label}
                                    </Link>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <Box className={menu}>
                        {links.map(([label, href]) => (
                            <Button
                                key={label}
                                className={clsx(menuItem, { [menuItemActive]: route === href })}
                                href={href}
                            >
                                {label}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Box>
        </AppBar>
    );
};

export default MainMenu;

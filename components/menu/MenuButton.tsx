import * as React from 'react';
import { Menu, makeStyles, IconButton, useTheme } from '@material-ui/core';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';

const useStyles = makeStyles(theme => ({
    button: {
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
        margin: '10px',
        boxShadow: 'none',
    },
}));

const MenuButton: React.FC = props => {
    const [anchorEl, handleMenu] = React.useState<(EventTarget & HTMLButtonElement) | null>(null);
    const theme = useTheme();
    const classes = useStyles();

    React.useEffect(() => {
        const handleResize = (): void => handleMenu(null);

        window.addEventListener('resize', handleResize);

        return (): void => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className={classes.button}>
            <IconButton aria-label="menu" onClick={(event): void => handleMenu(event.currentTarget)}>
                <MenuRoundedIcon htmlColor={theme.palette.text.primary} />
            </IconButton>

            <Menu
                anchorEl={anchorEl}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={Boolean(anchorEl)}
                onClose={(): void => handleMenu(null)}
            >
                {props.children}
            </Menu>
        </div>
    );
};

export default MenuButton;

import * as React from 'react';
import { useRouter } from 'next/router';
import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import Link from '../Link';

const useStyles = makeStyles({
    root: {
        paddingBottom: 4,
        margin: 32,

        '&:hover': {
            borderBottom: '1px solid',
        },
    },
    active: {
        borderBottom: '1px solid',
    },
});

export interface IMenuLink {
    label: string;
    href: string;
    prefetch?: boolean;
}

const MenuLink = ({ href, label, prefetch }: IMenuLink): React.ReactElement => {
    const router = useRouter();
    const classes = useStyles();

    return (
        <Link
            className={clsx(classes.root, { [classes.active]: router.route === href })}
            href={href}
            color="textPrimary"
            underline="none"
            prefetch={prefetch}
            style={{ fontWeight: 300 }}
        >
            {label}
        </Link>
    );
};

export default MenuLink;

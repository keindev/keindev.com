import * as React from 'react';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import Link from './Link';

const styles = {
    root: {
        paddingBottom: '4px',
        margin: '32px',

        '&:hover': {
            borderBottom: '1px solid',
            margin: '32px',
        },
    },
    active: {
        borderBottom: '1px solid',
        margin: '32px',
    },
};

export interface IMenuLink extends WithStyles<typeof styles> {
    className?: string;
    label: string;
    href: string;
    prefetch?: boolean;
}

const MenuLink = ({ classes, className, href, label, prefetch }: IMenuLink): React.ReactElement => {
    const router = useRouter();

    return (
        <React.Fragment>
            <Link
                className={clsx(classes.root, className, { [classes.active]: router.route === href })}
                href={href}
                color="secondary"
                underline="none"
                prefetch={prefetch}
            >
                {label}
            </Link>
        </React.Fragment>
    );
};

export default withStyles(styles)(MenuLink);

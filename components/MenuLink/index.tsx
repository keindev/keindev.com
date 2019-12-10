import * as React from 'react';
import { useRouter } from 'next/router';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Link from '../Link';

const styles = {
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
};

export interface IMenuLink extends WithStyles<typeof styles> {
    label: string;
    href: string;
    prefetch?: boolean;
}

const MenuLink = withStyles(styles)(
    ({ classes, href, label, prefetch }: IMenuLink): React.ReactElement => {
        const router = useRouter();

        return (
            <React.Fragment>
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
            </React.Fragment>
        );
    }
);

export default MenuLink;

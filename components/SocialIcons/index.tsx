import * as React from 'react';
import { Box, withStyles, WithStyles } from '@material-ui/core';
import Link from '../Link';
import theme from '../../themes/dark';
import GitHubIcon from './Icons/GitHub';
import TwitterIcon from './Icons/Twitter';
import NPMIcon from './Icons/NPM';
import DribbbleIcon from './Icons/Dribbble';
import InstagramIcon from './Icons/Instagram';
import TelegramIcon from './Icons/Telegram';
import MediumIcon from './Icons/Medium';

const styles = {
    icon: {
        width: 32,
        height: 32,
        margin: 12,
        fill: theme.palette.primary.light,
        filter: `drop-shadow(${theme.shadows[1]})`,

        '&:hover': {
            fill: theme.palette.text.primary,
            filter: `drop-shadow(${theme.shadows[2]})`,
        },
    },
};

const SocialIcons = withStyles(styles)(
    ({ classes }: WithStyles<typeof styles>): React.ReactElement => (
        <Box my={8} display="flex" justifyContent="center">
            <Link href="https://github.com/keindev" prefetch={false}>
                <GitHubIcon className={classes.icon} />
            </Link>
            <Link href="https://twitter.com/thekeindev" prefetch={false}>
                <TwitterIcon className={classes.icon} />
            </Link>
            <Link href="https://www.npmjs.com/~keindev" prefetch={false}>
                <NPMIcon className={classes.icon} />
            </Link>
            <Link href="https://dribbble.com/keindev" prefetch={false}>
                <DribbbleIcon className={classes.icon} />
            </Link>
            <Link href="https://www.instagram.com/kein.dev" prefetch={false}>
                <InstagramIcon className={classes.icon} />
            </Link>
            <Link href="https://t.me/keindev" prefetch={false}>
                <TelegramIcon className={classes.icon} />
            </Link>
            <Link href="https://medium.com/@keindev" prefetch={false}>
                <MediumIcon className={classes.icon} />
            </Link>
        </Box>
    )
);

export default SocialIcons;

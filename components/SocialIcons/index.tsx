import * as React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import GitHubIcon from '../Icons/GitHub';
import TwitterIcon from '../Icons/Twitter';
import NPMIcon from '../Icons/NPM';
import DribbbleIcon from '../Icons/Dribbble';
import InstagramIcon from '../Icons/Instagram';
import TelegramIcon from '../Icons/Telegram';
import MediumIcon from '../Icons/Medium';
import Link from '../Link';

const useStyles = makeStyles(theme => ({
    icon: {
        width: 32,
        height: 32,
        margin: 12,
        fill: theme.palette.secondary.light,
        filter: `drop-shadow(${theme.shadows[1]})`,

        '&:hover': {
            fill: theme.palette.text.primary,
            filter: `drop-shadow(${theme.shadows[24]})`,
        },
    },
}));

const SocialIcons: React.FC = () => {
    const { icon } = useStyles();

    return (
        <Box my={8} display="flex" justifyContent="center">
            <Link href="https://github.com/keindev">
                <GitHubIcon className={icon} />
            </Link>
            <Link href="https://twitter.com/thekeindev">
                <TwitterIcon className={icon} />
            </Link>
            <Link href="https://www.npmjs.com/~keindev">
                <NPMIcon className={icon} />
            </Link>
            <Link href="https://dribbble.com/keindev">
                <DribbbleIcon className={icon} />
            </Link>
            <Link href="https://www.instagram.com/kein.dev">
                <InstagramIcon className={icon} />
            </Link>
            <Link href="https://t.me/keindev">
                <TelegramIcon className={icon} />
            </Link>
            <Link href="https://medium.com/@keindev">
                <MediumIcon className={icon} />
            </Link>
        </Box>
    );
};

export default SocialIcons;

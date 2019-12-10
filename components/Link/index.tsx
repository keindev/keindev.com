/* eslint-disable jsx-a11y/anchor-has-content */
import * as React from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import MuiLink, { LinkProps as MuiLinkProps } from '@material-ui/core/Link';

type NextComposedProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & NextLinkProps;

// eslint-disable-next-line react/display-name
const NextComposed = React.forwardRef<HTMLAnchorElement, NextComposedProps>((props, ref) => {
    // eslint-disable-next-line react/prop-types
    const { as, href, replace, scroll, passHref, shallow, prefetch, ...other } = props;

    return (
        <NextLink
            href={href}
            prefetch={prefetch}
            as={as}
            replace={replace}
            scroll={scroll}
            shallow={shallow}
            passHref={passHref}
        >
            <a ref={ref} {...other} />
        </NextLink>
    );
});

interface ILinkPropsBase {
    activeClassName?: string;
    innerRef?: React.Ref<HTMLAnchorElement>;
    naked?: boolean;
}

type LinkProps = ILinkPropsBase & NextComposedProps & Omit<MuiLinkProps, 'ref'>;

// A styled version of the Next.js Link component:
// https://nextjs.org/docs/#with-link
function Link(props: LinkProps): React.ReactElement {
    const { innerRef, naked, ...other } = props;

    if (naked) {
        return <NextComposed ref={innerRef} {...other} />;
    }

    return <MuiLink component={NextComposed} ref={innerRef} {...other} />;
}

// eslint-disable-next-line react/display-name
export default React.forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => <Link {...props} innerRef={ref} />);

import * as React from 'react';
import Link, { LinkProps } from 'next/link';

export type TComposedLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & LinkProps;

const ComposedLink = React.forwardRef<HTMLAnchorElement, TComposedLinkProps>(function NextComposedComponent(
    props: React.PropsWithChildren<TComposedLinkProps>,
    ref: React.Ref<HTMLAnchorElement>
): React.ReactElement {
    const { as, href, replace, scroll, passHref, shallow, ...other } = props;
    const prefetch = /^(?:[a-z]+:)?\/\//i.test(href) ? false : undefined;

    return (
        <Link
            href={href}
            prefetch={prefetch}
            as={as}
            replace={replace}
            scroll={scroll}
            shallow={shallow}
            passHref={passHref}
        >
            <a ref={ref} {...other} />
        </Link>
    );
});

export default ComposedLink;

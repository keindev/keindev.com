import * as React from 'react';
import Link, { LinkProps } from '@material-ui/core/Link';
import ComposedLink, { TComposedLinkProps } from '../ComposedLink';

export default React.forwardRef<HTMLAnchorElement, TComposedLinkProps & Omit<LinkProps, 'ref'>>(function LinkComponent(
    props,
    ref: React.Ref<HTMLAnchorElement>
) {
    return <Link component={ComposedLink} {...props} ref={ref} />;
});

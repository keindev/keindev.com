import * as React from 'react';
import Button, { ButtonProps } from '@material-ui/core/Button';
import ComposedLink, { TComposedLinkProps } from '../ComposedLink';

export default React.forwardRef<HTMLAnchorElement, TComposedLinkProps & Omit<ButtonProps, 'ref'>>(
    function ButtonComponent(props, ref: React.Ref<HTMLAnchorElement>) {
        return <Button component={ComposedLink} {...props} ref={ref} />;
    }
);

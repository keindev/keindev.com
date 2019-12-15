/* eslint-disable max-len */
import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const NPMIcon = ({ className }: React.SVGAttributes<SVGElement>): React.ReactElement => (
    <SvgIcon className={className} viewBox="0 0 32 32">
        <path d="M5 5h22v22h-4.4V9.4H16V27H5V5z" />
    </SvgIcon>
);

export default NPMIcon;

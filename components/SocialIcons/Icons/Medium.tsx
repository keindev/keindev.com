/* eslint-disable max-len */
import * as React from 'react';
import { SvgIcon } from '@material-ui/core';

const MediumIcon = ({ className }: React.SVGAttributes<SVGElement>): React.ReactElement => (
    <SvgIcon className={className} viewBox="0 0 32 32">
        <path
            fillRule="evenodd"
            d="M4 4h24v24H4V4zm5.52408 7.4998c.14779.1332.22327.3288.20324.5267v7.1262c.04385.2571-.03719.5197-.21829.7074l-1.6936 2.0543v.2709h4.80227v-.2709l-1.6936-2.0543c-.1824-.1874-.2685-.4483-.2333-.7074v-6.163l4.2152 9.1956h.4892l3.6206-9.1956v7.3294c0 .1956 0 .2333-.128.3612l-1.3022 1.2642v.2709h6.3228v-.2709l-1.257-1.2341c-.111-.0846-.166-.2236-.143-.3612v-9.0676c-.023-.1376.032-.2766.143-.3612l1.2871-1.23413v-.2709h-4.456L16.306 17.3392l-3.613-7.92383H8.01866v.2709l1.50542 1.81353z"
            clipRule="evenodd"
        />
    </SvgIcon>
);

export default MediumIcon;

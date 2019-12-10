/* eslint-disable max-len */
import * as React from 'react';
import { SvgIcon } from '@material-ui/core';

const TwitterIcon = ({ className }: React.SVGAttributes<SVGElement>): React.ReactElement => (
    <SvgIcon className={className} viewBox="0 0 32 32">
        <path d="M10.991 27c10.1887 0 15.7615-8.4648 15.7615-15.8054 0-.2404 0-.4798-.0162-.718 1.0841-.78641 2.02-1.76006 2.7637-2.87543-1.011.44923-2.0835.74384-3.1817.87398 1.1564-.69422 2.0219-1.78612 2.4354-3.07249-1.0874.64705-2.277 1.10306-3.5175 1.34835-.8352-.89058-1.9399-1.48029-3.143-1.67789-1.2031-.1976-2.4376.00793-3.5125.58479-1.0749.57685-1.9302 1.49288-2.4336 2.60632-.5034 1.11343-.6269 2.36217-.3512 3.55307-2.2024-.1107-4.357-.6846-6.32381-1.6845-1.96685-.99988-3.70203-2.40336-5.09289-4.11932-.70838 1.22289-.92534 2.67055-.60671 4.04822.31863 1.3777 1.14889 2.5818 2.32175 3.3671-.88156-.0262-1.7439-.2646-2.51424-.6953v.0704c.00035 1.2826.44308 2.5255 1.2531 3.518.81003.9925 1.93747 1.6734 3.1911 1.9274-.81554.223-1.67121.2556-2.50128.0953.35398 1.1038 1.04313 2.069 1.97108 2.7607.92794.6917 2.04826 1.0752 3.2043 1.097-1.96159 1.5459-4.38476 2.3851-6.87962 2.3826-.44074-.0009-.88106-.0276-1.31868-.0802 2.53329 1.6303 5.48091 2.495 8.491 2.491" />
    </SvgIcon>
);

export default TwitterIcon;
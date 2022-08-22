import React from 'react';
import {
    GitHubIcon,
    LinkedInIcon,
    TwitterIcon
} from '@components/icons';

const IconSwitch = ({ name } : { name: string }): JSX.Element => {
    switch(name) {
        case 'GitHub':
            return <GitHubIcon />;
        case 'LinkedIn':
            return <LinkedInIcon />;
        case 'Twitter':
            return <TwitterIcon />;
        default:
            return <GitHubIcon />;
    }
};

export default IconSwitch;

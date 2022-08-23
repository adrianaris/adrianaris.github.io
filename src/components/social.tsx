import React from 'react';
import styled from 'styled-components';
import { socialMedia, email } from '@config';
import { IconSwitch } from '@components/icons';

const StyledList = styled.ul`
display: flex;
margin: 0;
padding: 0;
> li {
    padding: 0.5rem;
    > a {
        color: inherit;
        text-decoration: none;
        &:hover {
            color: purple;
        }
    }
    &:hover {
        transform: translateY(3px);
    }
}
list-style: none;
`

const Social = () => {
    return (
       <StyledList>
           {socialMedia.map(({ name, url}, i) => (
               <li key={i}>
                    <a href={url} aria-label={name} target="_blank" rel="noreferrer">
                        <IconSwitch name={name} />
                    </a>
               </li>
           ))}
           <li> <a href={`mailto:${email}`}>{email}</a></li>
       </StyledList> 
    )
}

export default Social

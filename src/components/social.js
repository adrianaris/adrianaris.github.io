import React from 'react'
import styled from 'styled-components'
import { socialMedia } from '../config'

const StyledList = styled.ul`
display: flex;
flex-direction: column;
margin: 0;
padding: 0;
list-style: none;
`

const Social = () => {
    return (
       <StyledList>
           {socialMedia.map(({ name, url}, i) => (
               <li key={i}>
                    <a href={url} aria-label={name} target="_blank" rel="noreferrer">
                        <div>{name}</div>
                    </a>
               </li>
           ))}
       </StyledList> 
    )
}

export default Social
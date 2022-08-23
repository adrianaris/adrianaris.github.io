import React from 'react';
import styled from 'styled-components';

const StyledInt = styled.div`
    text-align: center;
    p {
        max-width: 550px;
    }
`

const Introduction = () => {
    return (
        <StyledInt>
            <p>
                Hi, My name is Adrian Serbanescu. I'm continually learning and building software.
                <br/>At the moment I'm focused on web development with React, Express.js and TypeScript.
            </p>
            <p>
                You can ckeck-up my work at <a href="https://github.com/adrianaris">github</a>.
            </p>
        </StyledInt>
    )
};

export default Introduction;

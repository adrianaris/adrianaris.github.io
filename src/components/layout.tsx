import React from 'react';
import styled from 'styled-components';
import { SEO } from './seo';
import Social from './social';

const StyledLayout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
`;

const Layout = ({ children } : Props) => {
    return (
    <>
        <SEO />
        <StyledLayout>
            <Social />
            {children}
        </StyledLayout>
    </>
    )
};

export default Layout;

type Props = {
    children: React.ReactNode
};

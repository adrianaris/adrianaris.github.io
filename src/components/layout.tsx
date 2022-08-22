import React from 'react';
import styled from 'styled-components';
import { SEO } from './seo';

const StyledLayout = styled.div`
    display: flex;
    flex-directon: column;
    min-height: 100vh;
`;

const Layout = ({ children } : Props) => {
    return (
    <>
        <SEO />
        <StyledLayout>
            {children}
        </StyledLayout>
    </>
    )
};

export default Layout;

type Props = {
    children: React.ReactNode
};

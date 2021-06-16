import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { Menu } from '../Menu/index';

const StyledFooter = styled.footer`
  display: flex;
  border-top: 1px solid ${({ theme }) => theme.colors['neutral-80']};
  flex-direction: column;
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
`;

const StyledSpan = styled.span`
  margin-left: 1.25rem;
  margin-top: 0.2rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const footerMenuItems = [
  {
    label: 'User Agreement',
    url: '/',
  },
  {
    label: 'Privacy Policy',
    url: '/',
  },
  {
    label: 'Cookie Usage',
    url: '/',
  },
];

export const Footer = () => (
  <StyledFooter>
    <StyledDiv>
      <Menu menuItems={footerMenuItems} />
    </StyledDiv>
    <StyledDiv>
      <Image
        src="/gronda_logo_black.png"
        alt="Gronda Logo"
        width={100}
        height={25}
      />
      <StyledSpan>© 2021 Gronda GmbH</StyledSpan>
    </StyledDiv>
  </StyledFooter>
);

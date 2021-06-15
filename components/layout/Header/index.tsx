import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import { Menu } from '../Menu';

const StyledHeader = styled.header`
  align-items: center;
  background: ${({ theme }) => theme.colors['green-60']};
  display: flex;
  justify-content: space-between;
  padding: 0 2rem;
`;

const headerMenuItems = [
  {
    label: 'Home',
    url: '/'
  },
  {
    label: 'Profile',
    url: '/'
  },
  {
    label: 'About',
    url: '/'
  },
]

export const Header = () => (
  <StyledHeader>
    <Image
      src="/logo_gronda_01.png"
      alt="Gronda Logo"
      width={184}
      height={45}
    />
    <Menu menuItems={headerMenuItems}/>
  </StyledHeader>
);

import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import { Menu } from '../Menu';
import { useToggletheme } from '../../../localFields/useDarkMode';

const StyledHeader = styled.header`
  align-items: center;
  background: ${({ theme }) => theme.colors['green-60']};
  display: flex;
  justify-content: space-between;
  padding: 0 2rem;
`;

const Button = styled.button`
  background: ${({ theme }) => theme.background};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  color: ${({ theme }) => theme.body};
  border-radius: 30px;
  cursor: pointer;
  font-size:0.8rem;
  padding: 0.6rem;
`;

const headerMenuItems = [
  {
    label: 'Home',
    url: '/',
  },
  {
    label: 'Profile',
    url: '/',
  },
  {
    label: 'About',
    url: '/',
  },
];
export const Header = () => {
  const [theme, toggleTheme] = useToggletheme();

  return (
    <StyledHeader>
      <Image
        src="/logo_gronda_01.png"
        alt="Gronda Logo"
        width={184}
        height={45}
      />
      <Button onClick={() => toggleTheme(!theme)}>Switch Theme</Button>
      <Menu menuItems={headerMenuItems} />
    </StyledHeader>
  );
};

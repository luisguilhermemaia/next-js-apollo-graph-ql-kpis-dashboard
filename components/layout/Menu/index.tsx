import React, { FC } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const StyledList = styled.ul`
  display: flex;
`;

const StyledItem = styled.li`
  list-style: none;
`;

const StyledAnchor = styled.a`
  color: ${({ theme }) => theme.colors['neutral-120']};
  font-family: sans-serif;
  margin-right: 1rem;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

type MenuItem = {
  label: string;
  url: string;
};

type MenuItemsProps = {
  menuItems: MenuItem[]
};

export const Menu: FC<MenuItemsProps> = ({ menuItems }) => (
  <nav>
    <StyledList>
      {menuItems.map(({ label, url }) => (
        <StyledItem key={label}>
          <Link href={url}>
            <StyledAnchor>{label}</StyledAnchor>
          </Link>
        </StyledItem>
      ))}
    </StyledList>
  </nav>
);

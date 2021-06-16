import React, { Dispatch, FC, SetStateAction, useState } from 'react';
import styled from 'styled-components';

import { DropdownItem } from '../../graphql/types';

const StyledLabel = styled.span`
  display: inline-block;
  margin-right: 1.5rem;
  color: #6e6e6e;
`;

const DropdownWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
`;

const StyledButton = styled.input`
  width: 15rem;
  padding: 2px;
  background-color: white;
  outline: none;
  border: 2px solid #ccc;
  color: #6e6e6e;
  cursor: pointer;
`;

const StyledButtonUl = styled.ul`
  list-style: none;
  color: #6e6e6e;
  flex-direction: column;
  border: 2px solid #ccc;
  border-radius: 3px;
  position: absolute;
  top: -17px;
  right: -11rem;
  max-width: 12rem;
  padding-left: 10px;
  padding-right: 30px;
  visibility: ${(props: StyledButtonLipropsType) =>
    props.isOpen ? 'visible' : 'hidden'};
`;

type StyledButtonLipropsType = {
  isOpen: boolean;
};

const StyledButtonLi = styled.li`
  width: 7rem;
  cursor: pointer;
  margin-bottom: 3px;
  padding: 3px;
`;

type DropdownPropsType = {
  label: string;
  setState: Dispatch<SetStateAction<DropdownItem>>;
  items: Array<DropdownItem>;
  value: DropdownItem;
};

export const Dropdown: FC<DropdownPropsType> = ({
  label,
  setState,
  items,
  value,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleSelected = (item: DropdownItem) => {
    setState(item);
    setIsOpen(false);
  };
  return (
    <DropdownWrapper>
      <StyledLabel>{label}</StyledLabel>
      <StyledButton
        type="button"
        value={value.label}
        onClick={() => setIsOpen(!isOpen)}
      />
      <StyledButtonUl isOpen={isOpen}>
        {items.map((item) => (
          <StyledButtonLi key={item.label} onClick={() => handleSelected(item)}>
            {item.label}
          </StyledButtonLi>
        ))}
      </StyledButtonUl>
    </DropdownWrapper>
  );
};

import React, { FC } from 'react';
import styled from 'styled-components';

interface Props {
  color?: string;
  onClick?: () => void;
}

const Button: FC<Props> = props => (
  <StyledButton color={props.color} onClick={props.onClick}>
    {props.children}
  </StyledButton>
);

const StyledButton = styled.button`
  background-color: ${props => props.color};
`;

export default Button;

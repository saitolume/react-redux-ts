import React, { FC } from 'react';
import styled from 'styled-components';

interface Props {
  color?: string;
}

export const Button: FC<Props> = props => {
  return <Btn color={props.color}>{props.children}</Btn>;
};

const Btn = styled.button`
  background-color: ${props => props.color};
`;

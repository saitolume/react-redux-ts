import React, { FC } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface Props {
  color?: string;
  className?: string;
}

const Navbar: FC<Props> = props => {
  return (
    <div className={props.className}>
      <LinkList>
        <li>
          <StyledLink to="/" color={props.color}>
            Home
          </StyledLink>
        </li>
        <Separation color={props.color}>|</Separation>
        <li>
          <StyledLink to="/demo" color={props.color}>
            Demo
          </StyledLink>
        </li>
      </LinkList>
    </div>
  );
};
export default Navbar;

const LinkList = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.color};
`;

const Separation = styled.span`
  color: ${props => props.color};
  margin: 0 8px;
`;

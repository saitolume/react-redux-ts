import React, { FC } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header: FC = () => {
  return (
    <Wrapper>
      <List>
        <Link to="/">Home</Link>
      </List>
      <List>
        <Link to="/contact">Contact</Link>
      </List>
    </Wrapper>
  );
};
export default Header;

const Wrapper = styled.ul`
  display: flex;
  margin: 0px;
  list-style-type: none;
  padding: 16px 0px;
  padding-left: 30px;
`;

const List = styled.li`
  margin-right: 10px;
`;

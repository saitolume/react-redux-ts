import React, { FC } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Navbar: FC = () => {
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

const Wrapper = styled.ul`
  display: flex;
  list-style-type: none;
  padding-left: 30px;
`;

const List = styled.li`
  margin-right: 10px;
`;

export default Navbar;

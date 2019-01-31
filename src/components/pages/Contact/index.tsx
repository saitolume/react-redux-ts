import React, { FC } from 'react';
import styled from 'styled-components';

const Contact: FC = () => {
  return (
    <ContactList>
      <List>
        Twitter:
        <TwitterLink href="https://twitter.com/saitoeku3" target="_blank">
          @saitoeku3
        </TwitterLink>
      </List>
      <List>Email: saitoeku3@gmail.com</List>
    </ContactList>
  );
};
export default Contact;

const ContactList = styled.ul`
  margin-top: 30px;
  list-style-type: square;
`;

const List = styled.li`
  margin-bottom: 10px;
`;

const TwitterLink = styled.a`
  margin-left: 4px;
  text-decoration: none;
`;

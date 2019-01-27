import React, { FC } from 'react';
import styled from 'styled-components';

export const Contact: FC = () => {
  return (
    <div>
      <LinkList>
        <li>
          Twitter:
          <TwitterLink href="https://twitter.com/saitoeku3" target="_blank">
            @saitoeku3
          </TwitterLink>
        </li>
        <li>Email: saitoeku3@gmail.com</li>
      </LinkList>
    </div>
  );
};

const LinkList = styled.ul`
  list-style-type: square;
`;

const TwitterLink = styled.a`
  margin-left: 4px;
  text-decoration: none;
`;

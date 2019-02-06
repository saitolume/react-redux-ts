import React, { FC } from 'react';
import styled, { keyframes } from 'styled-components';
import ReactLogo from '../../../../assets/logo.svg';

const Home: FC = () => {
  return (
    <div>
      <Logo src={ReactLogo} alt="react logo" />
      <Title>saitoeku3's React Boilerplate</Title>
    </div>
  );
};
export default Home;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Logo = styled.img`
  padding: 4vh 0;
  height: 32vh;
  animation: ${rotate} infinite 20s linear;
`;

const Title = styled.h1`
  color: white;
  margin: 0;
`;

import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { StateProps, DispatchProps } from './container';
import { Button } from '../../atoms';

const Home: FC<StateProps & DispatchProps> = props => {
  const [message, setMessage] = useState<string>('hello world');
  const [imputNumber, setInputNumber] = useState<number>(0);

  return (
    <Wrapper>
      <ContentArea>
        <p>{message}</p>
        <input
          type="text"
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
      </ContentArea>
      <ContentArea>
        <Count>count: {props.value}</Count>
        <Button onClick={props.increment}>+</Button>
        <Button onClick={props.decrement}>-</Button>
        <CountForm>
          <input
            type="number"
            value={imputNumber}
            onChange={e => setInputNumber(e.target.valueAsNumber)}
          />
          <Button onClick={() => props.setCount(imputNumber)}>set</Button>
        </CountForm>
      </ContentArea>
    </Wrapper>
  );
};
export default Home;

const Wrapper = styled.div`
  margin: 30px;
`;

const ContentArea = styled.div`
  margin: 30px 0px;
`;

const Count = styled.span`
  margin-right: 10px;
`;

const CountForm = styled.div`
  margin-top: 10px;
`;

import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { StateProps, DispatchProps } from './container';

const Demo: FC<StateProps & DispatchProps> = props => {
  const [message, setMessage] = useState<string>('hello world');
  const [imputNumber, setInputNumber] = useState<number>(0);
  const [id, setId] = useState<string>('');

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
        <button onClick={props.increment}>+</button>
        <button onClick={props.decrement}>-</button>
        <Form>
          <input
            type="number"
            value={imputNumber}
            onChange={e => setInputNumber(e.target.valueAsNumber)}
          />
          <button onClick={() => props.setCount(imputNumber)}>set</button>
        </Form>
      </ContentArea>
      <ContentArea>
        <p>Qiita</p>
        <QiitaProfile>
          <li>id: {props.id}</li>
          <li>name: {props.name}</li>
          <li>description: {props.description}</li>
        </QiitaProfile>
        <Form>
          <input
            type="text"
            value={id}
            onChange={e => setId(e.target.value)}
            placeholder="Input Qiita UserID"
          />
          <button onClick={() => props.fetchUser(id)}>fetch</button>
        </Form>
      </ContentArea>
    </Wrapper>
  );
};
export default Demo;

const Wrapper = styled.div`
  margin: 30px;
`;

const ContentArea = styled.div`
  margin: 30px 0px;
`;

const Count = styled.span`
  margin-right: 10px;
`;

const QiitaProfile = styled.ul`
  list-style-type: none;
  padding-left: 0;
`;

const Form = styled.div`
  margin-top: 10px;
`;

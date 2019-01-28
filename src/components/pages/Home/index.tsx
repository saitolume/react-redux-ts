import React, { FC, useState } from 'react';
import styled from 'styled-components';
import {
  StateProps,
  DispatchProps,
} from '../../../containers/pages/HomeContainer';

type Props = StateProps & DispatchProps;

export const Home: FC<Props> = props => {
  const [input, setInput] = useState<string>('world');

  const updateMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <Wrapper>
      <LocalStateArea>
        <p>hello {input}</p>
        <input type="text" value={input} onChange={updateMessage} />
      </LocalStateArea>
      <GlobalStateArea>
        {props.value}
        <button onClick={() => props.increment}>+</button>
        <button onClick={() => props.decrement}>-</button>
      </GlobalStateArea>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 30px;
`;

const LocalStateArea = styled.div`
  margin-bottom: 20px;
`;

const GlobalStateArea = styled.div`
  margin-bottom: 20px;
`;

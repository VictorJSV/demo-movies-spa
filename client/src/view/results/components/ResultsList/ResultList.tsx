import * as React from 'react';
import { Result } from '../Result';
import { Wrapper } from './styled';

export const ResultList = ({list}) => (
  <>
    <h2>Resultados de Búsqueda</h2>
    <Wrapper>
      {list.map((item, index) => (
        <Result key={index} item={item}/>
      ))}
    </Wrapper>
  </>
);

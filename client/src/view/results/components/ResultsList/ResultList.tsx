import * as React from 'react';
import { Result } from '../Result';
import { Wrapper } from './styled';

export const ResultList = ({list, activeDetailMovie, totalMovies}) => (
  <>
    <h2>Resultados de Búsqueda: <b>{totalMovies}</b></h2>
    <Wrapper>
      {list.map((item, index) => (
        <Result key={index} item={item} onClick={() => activeDetailMovie(item.uuid)}/>
      ))}
    </Wrapper>
  </>
);

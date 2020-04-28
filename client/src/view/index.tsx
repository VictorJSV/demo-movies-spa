import * as React from 'react';
import { GlobalStyle } from '../config/globalStyle';
import { FilterFeature } from './filters';
import { ResultFeature } from './results';
import { Wrapper, AsideWrapper, ListWrapper, HeaderWrapper } from './styled';

const list = [
  {
    uuid: 1,
    title: 'Gender',
    icon: 'ico-files',
    type: 'list',
    items: [
      {
        id: 2,
        title: 'Acción',
        count: 54
      },
      {
        id: 3,
        title: 'Comedia',
        count: 14
      }
    ],
  },
  {
    uuid: 2,
    title: 'Lorem',
    icon: 'ico-files',
    type: 'list',
    items: [
      {
        id: 1,
        title: 'Male',
        count: 21
      },
      {
        id: 2,
        title: 'Female',
        count: 11
      }
    ],
  }
];

export const App = () => (
  <>
    <GlobalStyle />
    <HeaderWrapper>Header</HeaderWrapper>
    <Wrapper>
      <AsideWrapper>
        <FilterFeature list={list} />
      </AsideWrapper>
      <ListWrapper>
        <ResultFeature/>
      </ListWrapper>
    </Wrapper>
  </>
);

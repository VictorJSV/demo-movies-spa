import * as React from 'react';
import { GlobalStyle } from '../config/globalStyle';
import { FilterFeature } from './filters';
import { ResultFeature } from './results';
import { Wrapper, AsideWrapper, ListWrapper, HeaderWrapper } from './styled';

export const App = () => (
  <>
    <GlobalStyle />
    <HeaderWrapper>Header</HeaderWrapper>
    <Wrapper>
      <AsideWrapper>
        <FilterFeature/>
      </AsideWrapper>
      <ListWrapper>
        <ResultFeature/>
      </ListWrapper>
    </Wrapper>
  </>
);

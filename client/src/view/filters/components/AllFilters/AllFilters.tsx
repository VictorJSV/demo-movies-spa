import * as React from 'react';
import { AllFilterWrapper, AllFilterSpan } from './styled';

interface Props {
  hideMoviesByFilter: Function;
}

export const AllFilters: React.SFC<Props> = ({hideMoviesByFilter}) => (
  <AllFilterWrapper onClick={() => hideMoviesByFilter()}>
    <AllFilterSpan>{'<'} Todos los géneros</AllFilterSpan>
  </AllFilterWrapper>
);

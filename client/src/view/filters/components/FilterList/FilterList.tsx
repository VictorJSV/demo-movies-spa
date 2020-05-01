import * as React from 'react';
import { Filter } from '../Filter/Filter';

export const FilterList = ({list, showMoviesByFilter}) => (
  <div>
    {/*list.map((item, index) => (

    ))*/}
    <Filter list={list} showMoviesByFilter={showMoviesByFilter}/>
  </div>
);

import * as React from 'react';
import { Filter } from '../Filter/Filter';

export const FilterList = ({list}) => (
  <div>
    {list.map((item, index) => (
      <Filter key={index} list={item} />
    ))}
  </div>
);

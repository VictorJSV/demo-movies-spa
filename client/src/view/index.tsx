import * as React from 'react';
import { FilterFeature } from './filters'

const filterList = [
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
    title: 'Sex',
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
    <div>
        <FilterFeature list={filterList} />
    </div>
);

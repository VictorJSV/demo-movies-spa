import * as React from 'react';
import { shallow } from 'enzyme';
import { FilterList } from '.';
import { Filter } from '../Filter/Filter';

it('Component FilterList - render 1 item correctly', () => {
  const mock1 = [
    {
      uuid: 1,
      title: 'Gender',
      icon: 'ico-files',
      type: 'list',
      items: [],
    }
  ];

  const wrapper = shallow(<FilterList list={mock1} showMoviesByFilter={()=>{}}/>);
  expect(wrapper.find(Filter)).toHaveLength(1);
})

it('Component FilterList - render 2 items correctly', () => {
  const mock2 = [
    {
      uuid: 1,
      title: 'Gender',
      icon: 'ico-files',
      type: 'list',
      items: [],
    },
    {
      uuid: 2,
      title: 'Gender',
      icon: 'ico-files',
      type: 'list',
      items: [],
    }
  ];

  const wrapper = shallow(<FilterList list={mock2} showMoviesByFilter={()=>{}}/>);
  expect(wrapper.find(Filter)).toHaveLength(mock2.length);
})

import * as React from 'react';
import { shallow } from 'enzyme';
import { Filter } from '.';
import { ListItem, Title, ListItemTitle, ListItemCount } from './styled';

it('Component Filter - render 1 item correctly', () => {
  const mock1 = {
    uuid: 1,
    title: 'Genres',
    icon: 'ico-files',
    type: 'list',
    items: [
      {
        id: 2,
        title: 'Acción',
        count: 54
      }
    ],
  };

  const wrapper = shallow(<Filter list={mock1} />);
  expect(wrapper.find(ListItem)).toHaveLength(mock1.items.length);
})

it('Component Filter - render 2 items correctly', () => {
  const mock2 = {
    uuid: 1,
    title: 'Genres',
    icon: 'ico-files',
    type: 'list',
    items: [
      {
        id: 2,
        title: 'Acción 1',
        count: 54
      },
      {
        id: 1,
        title: 'Acción 2',
        count: 54
      }
    ],
  };

  const wrapper = shallow(<Filter list={mock2} />);
  expect(wrapper.find(ListItem)).toHaveLength(mock2.items.length);
})

it('Component Filter - render all items correctly', () => {
  const mock3 = {
    uuid: 1,
    title: 'Gender',
    icon: 'ico-files',
    type: 'list',
    items: [
      {
        id: 2,
        title: 'Acción',
        count: 54
      }
    ],
  };

  const wrapper = shallow(<Filter list={mock3} />);
  expect(wrapper.find(Title).text()).toEqual(mock3.title);
  expect(wrapper.find(ListItemTitle).text()).toEqual(mock3.items[0].title);
  expect(wrapper.find(ListItemCount).text()).toEqual(String(mock3.items[0].count));
})

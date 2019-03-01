import * as React from 'react';
import Icon from 'react-icons-kit';
import { arrows_up } from 'react-icons-kit/linea/arrows_up'
import { basic_archive_full } from 'react-icons-kit/linea/basic_archive_full'
import {
  Header,
  Body,
  Title,
  Layout,
  List,
  ListItem,
  ListItemTitle,
  ListItemCount,
} from './styled';

interface List {
  id: number;
  title: string;
  count: number;
}

interface Filter {
  uuid: number;
  title: string;
  icon: string;
  type: string;
  items: List[];
}

interface Props {
  list: Filter;
}

export const Filter: React.SFC<Props> = ({ list }) => (
  <Layout type={list.type}>
    <Header icon={list.icon}>
      <Icon icon={basic_archive_full} size={26} style={{ color: '#929292' }} />
      <Title>{list.title}</Title>
      <Icon icon={arrows_up} size={32} style={{ color: '#929292' }} />
    </Header>
    <Body>
      <List>
        {list.items.map((item, index) => (
          <ListItem key={index}>
            <ListItemTitle>{item.title}</ListItemTitle>
            <ListItemCount>{item.count}</ListItemCount>
          </ListItem>
        ))}
      </List>
    </Body>
  </Layout>
);

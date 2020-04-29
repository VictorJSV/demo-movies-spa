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

interface Props {
  list: any;
}

export const Filter: React.SFC<Props> = ({ list }) => (
  <Layout>
    <Header>
      <Icon icon={basic_archive_full} size={26} style={{ color: '#929292' }} />
      <Title>Genre</Title>
      <Icon icon={arrows_up} size={32} style={{ color: '#929292' }} />
    </Header>
    <Body>
      <List>
        {list.map((item, index) => (
          <ListItem key={index}>
            <ListItemTitle>{item.name}</ListItemTitle>
            <ListItemCount>{'<N>'}</ListItemCount>
          </ListItem>
        ))}
      </List>
    </Body>
  </Layout>
);

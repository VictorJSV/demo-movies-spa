import * as React from 'react';
import {
  Layout,
  ImageWrapper,
  Image,
  Title
} from "./styled";

interface Props {
  item: Result;
  onClick(e: React.MouseEvent<HTMLButtonElement>);
}

interface Result {
  imageSrc: string;
  title: string;
}

export const Result: React.SFC<Props> = ({item, onClick}) => (
  <Layout onClick={onClick}>
    <ImageWrapper><Image src={item.imageSrc}/></ImageWrapper>
    <Title>{item.title}</Title>
  </Layout>
);

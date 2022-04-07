import React from 'react';
import { Container, Image, Title, Text } from './style'

type Props = {
  image: string
  title: string
  text: string
}

export default function Card({ image, title, text }: Props) {
  return (
    <Container>
      <Image src={image} />
      <Title>{title}</Title>
      <Text>{text}</Text>
    </Container>
  )
}
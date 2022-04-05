import React from 'react';
import { Chip, Avatar, Name, Icon } from './style';

type Props = {
  avatar?: string;
  name?: string;
};

export default function ChipComponent({ avatar, name }: Props) {
  return (
    <Chip>
      {avatar ? <Avatar src={avatar} margin={!!name} /> : <Icon margin={!!name} />}
      {name ? <Name>{name}</Name> : ""}
    </Chip>
  );
}

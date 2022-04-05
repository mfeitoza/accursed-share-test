import styled from "styled-components";
import { UserCircleIcon } from "@heroicons/react/outline";

export const Chip = styled.div`
  background: #f1f1f1;
  display: inline-flex;
  align-items: center;
  border-radius: 9999px;
`;

export const Avatar = styled.img<{ margin: boolean }>`
  width: 38px;
  height: 38px;
  object-fit: cover;
  display: block;
  background: #b9b9b9;
  border-radius: 9999px;
  margin: ${props => props.margin ? '0 0.6rem 0 0' : ''};
`;

export const Name = styled.span`
  font-size: 0.7rem;
  vertical-align: middle;
  line-height: 1.4rem;
  text-transform: uppercase;
  margin: 0 0.8rem 0 0;
`;

export const Icon = styled(UserCircleIcon)<{ margin: boolean }>`
  width: 38px;
  height: 38px;
  margin: ${props => props.margin ? '0 0.6rem 0 0' : ''};
`;
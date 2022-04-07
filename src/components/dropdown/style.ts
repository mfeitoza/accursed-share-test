import styled from "styled-components";
import { ChevronDownIcon, ChevronUpIcon, CheckIcon } from '@heroicons/react/outline'

type ListProps = {
  isOpen: boolean
}

export const Button = styled.button`
    background-color: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.05);
    border-radius: .5rem;
    box-shadow: rgba(0, 0, 0, 0.05) 0 1px 5px 0;
    box-sizing: border-box;
    color: rgba(0, 0, 0, 0.8);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
    font-weight: 400;
    margin: 0;
    padding: 0.6rem 1rem;
    text-decoration: none;
    user-select: none;
    width: 100%;

  &:hover,
  &:focus {
    border-color: rgba(0, 0, 0, 0.15);
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
    color: rgba(0, 0, 0, 0.65);
  }

  &:active {
    background: rgba(0, 0, 0, 0.01);
    border-color: rgba(0, 0, 0, 0.15);
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
    color: rgba(0, 0, 0, 0.65);
  }
`

export const Label = styled.label`
  padding-bottom: 0.5rem;
  font-size: 0.9rem;
  display: inline-block;
`

export const List = styled.ul<ListProps>`
  list-style: none;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: .5rem;
  box-shadow: rgba(0, 0, 0, 0.05) 0 1px 5px 0;
  padding: 0.4rem 0;
  display: ${props => props.isOpen ? 'block' : 'none'}
`

export const ListItem = styled.li`
  cursor: pointer;
  user-select: none;
  padding: 0.4rem 1rem;
  color: rgba(0, 0, 0, 0.8);
  font-size: 0.9rem;

  &:hover {
    background: rgba(0, 0, 0, 0.04);
    color: rgba(0, 0, 0, 0.9);
  }
`

export const ChevronIcon = styled(ChevronDownIcon)`
  width: 24px;
  height: 24px;
  color: rgba(0, 0, 0, 0.5);
`

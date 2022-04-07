import React, { useState, useEffect, useRef, RefObject, } from 'react';
import { Button, Label, List, ListItem, ChevronIcon } from './style'

type Option = {
  label: string
  value: string | number
}

type Props = {
  name: string
  label?: string
  placeholder?: string
  options: Option[]
}

function useClickOutside (ref: RefObject<HTMLElement>, callback: Function) {
  useEffect(() => {
    function handleClick(e: Event) {
      e.preventDefault()
      if (ref.current && !ref.current.contains(e.target as Node)) {
        callback()
      }
    }

    window.addEventListener('click', handleClick)

    return () => {
      window.removeEventListener('click', handleClick)
    }
  }, [ref, callback])
}

export default function Dropdown({ name, label = "", placeholder = "", options }: Props) {
  let [isOpen, setIsOpen] = useState<boolean>(false)
  let [selected, setSelected] = useState<Option>()
  const selectEl = useRef<HTMLSelectElement>(null)
  const ref = useRef(null)

  const close = () => setIsOpen(false)
  const open = () => setIsOpen(true)
  const setValue = (option: Option) => {
    setSelected(option)
    if (selectEl.current) {
      selectEl.current.selectedIndex = options.indexOf(option) + 1
      selectEl.current.dispatchEvent(
        new Event('change', {
          bubbles: true,
				  cancelable: true
        })
      )
    }
    close()
  }

  useClickOutside(ref, close)

  return (
    <div ref={ref}>
      <Label htmlFor={name}>{label}</Label>
      <select id={name} name={name} style={{ visibility: 'hidden' }} ref={selectEl}>
        <option label=" " />
        {options.map(option => <option value={option.value} key={option.value}>{option.label}</option>)}
      </select>
      <div>
        <Button type="button" onClick={() => open()}><span>{selected ? selected.label : placeholder}</span><ChevronIcon /></Button>
        <List isOpen={isOpen}>
          {options.map(option => <ListItem onClick={() => setValue(option)} key={option.value}>{option.label}</ListItem>)}
        </List>
      </div>
    </div>
  )
}
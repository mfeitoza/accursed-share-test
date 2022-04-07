import React, { useState, useRef, useEffect, useMemo, MouseEvent } from "react";
import throttle from 'lodash.throttle'
import debounce from 'lodash.debounce'
import { Container, Wrapper, Tooltip } from "./style";

type Props = {
  text: string;
  children: React.ReactNode;
};

export default function Ballon({ text, children }: Props) {
  let [isOpen, setOpen] = useState(false);

  let [x, setX] = useState(0);
  let [y, setY] = useState(0);
  let [direction, setDirection] = useState<
    "up" | "down" | "left" | "right" | ""
  >("");

  let [wrapperHeigth, setWrapperHeigth] = useState(0);
  let [wrapperWidth, setWrapperWidth] = useState(0);
  let [tooltipHeight, setTooltipHeigth] = useState(0);
  let [tooltipWidth, setTooltipWidth] = useState(0);

  let wrapperRef = useRef<HTMLDivElement>(null);
  let tooltipRef = useRef<HTMLDivElement>(null);

  function handleDirection(e: MouseEvent<HTMLDivElement>): void {
    e.persist()
    console.log('handle direction')
    if (e.pageX > x && e.pageY === y) {
      setDirection("right");
    } else if (e.pageX === x && e.pageY > y) {
      setDirection("down");
    } else if (e.pageX === x && e.pageY < y) {
      setDirection("up");
    } else if (e.pageX < x && e.pageY === y) {
      setDirection("left");
    }
    setX(e.pageX);
    setY(e.pageY);
  }

  const open = () => {
    setOpen(true);
  };
  const close = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (wrapperRef.current) {
      setWrapperHeigth(wrapperRef.current.clientHeight);
      setWrapperWidth(wrapperRef.current.clientWidth);
    }
    if (tooltipRef.current) {
      setTooltipHeigth(tooltipRef.current.clientHeight);
      setTooltipWidth(tooltipRef.current.clientWidth);
    }
    console.log(wrapperWidth)
  }, [wrapperRef, tooltipRef, isOpen]);

  return (
    <Container>
      {isOpen && (
        <Tooltip
          wrapperWidth={wrapperWidth}
          wrapperHeight={wrapperHeigth}
          tooltipWidth={tooltipWidth}
          tooltipHeight={tooltipHeight}
          direction={direction}
          ref={tooltipRef}
        >
          {text}
        </Tooltip>
      )}

      <Wrapper
        ref={wrapperRef}
        onMouseMove={handleDirection}
        onMouseEnter={() => open()}
        onMouseLeave={() => close()}
      >
        {children}
      </Wrapper>
    </Container>
  );
}

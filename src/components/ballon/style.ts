import styled from "styled-components";

type TooltipProps = {
  wrapperWidth: number;
  wrapperHeight: number;
  tooltipWidth: number;
  tooltipHeight: number;
  direction: "up" | "down" | "left" | "right" | "";
};

export const Container = styled.div`
  position: relative;
`;

export const Wrapper = styled.div`
  user-select: none;
  display: inline-block;
  cursor: pointer;
`;

export const Tooltip = styled.div<TooltipProps>`
  z-index: 9999;
  width: 120px;
  text-align: center;
  position: absolute;
  background: rgba(0, 0, 0, 0.7);
  padding: 0.2rem 0.4rem;
  color: white;
  border-radius: 0.4rem;
  ${(props) => {
    switch (props.direction) {
      case "up":
        return `
          top: ${-(props.tooltipHeight + 10)}px;
          left: ${(props.wrapperWidth - props.tooltipWidth) / 2}px;
        `;
      case "down":
        return `
          bottom: ${-(props.tooltipHeight + 10)}px;
          left: ${(props.wrapperWidth - props.tooltipWidth) / 2}px;
        `;
      case "left":
        return `
          top: ${(props.wrapperHeight - props.tooltipHeight) / 2}px;
          left: ${-(props.tooltipWidth + 10)}px;
        `;
      case "right":
        return `
          top: ${(props.wrapperHeight - props.tooltipHeight) / 2}px;
          left: ${props.wrapperWidth + 10}px;
        `;
    }
  }}

  &::after {
    content: "";
    position: absolute;
    border-width: 5px;
    border-style: solid;
    ${(props) => {
      switch (props.direction) {
        case "up":
          return `
            top: 100%;
            left: 50%;
            margin-left: -5px;
            border-color: rgba(0, 0, 0, 0.7) transparent transparent transparent;
          `;
        case "down":
          return `
            bottom: 100%;
            left: 50%;
            margin-left: -5px;
            border-color: transparent transparent rgba(0, 0, 0, 0.7) transparent;
          `;
        case "left":
          return `
            top: 50%;
            left: 100%;
            margin-top: -5px;
            border-color: transparent transparent transparent rgba(0, 0, 0, 0.7);
          `;
        case "right":
          return `
            top: 50%;
            right: 100%;
            margin-top: -5px;
            border-color: transparent rgba(0, 0, 0, 0.7) transparent transparent;
          `;
      }
    }}
  }
`;

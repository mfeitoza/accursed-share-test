import styled from "styled-components";

const borderRadius = "0.8rem";

export const Container = styled.div`
  box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.2);;
  border-radius: ${borderRadius};
  padding: 10rem 2rem 2rem 2rem;
  position: relative;
  margin-top: 2rem;
  width: auto;
`;

export const Image = styled.img`
  background: #cacaca;
  height: 12rem;
  width: calc(100% - 4rem);
  border-radius: ${borderRadius};
  position: absolute;
  top: -2rem;
  object-fit: cover;
`;

export const Title = styled.h3`
`;

export const Text = styled.p`
`;

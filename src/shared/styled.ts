import styled, { css } from "styled-components";

export const Button = styled.button`
  ${({ theme }) => theme.shadow}
  background-color: ${({ theme }) => theme.color.primary1};
  width: 100px;
  height: 100px;
`;

export const Container = styled.div`
  ${({ theme }) => theme.flexCenter}
`;

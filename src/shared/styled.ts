import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const Button = styled.button`
  ${({ theme }) => theme.shadow}
  background-color: ${({ theme }) => theme.color.primary1};
  width: 100px;
  height: 100px;
`;

export const Wrapper = styled.div`
  width: 150px;
  height: 150px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
`;

export const Container = styled(motion.div)`
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: blue;
  border-radius: 30px;
`;

export const Item = styled(motion.div)`
  width: inherit;
  height: inherit;
  background: white;
  transform-origin: 50% 100%;
`;

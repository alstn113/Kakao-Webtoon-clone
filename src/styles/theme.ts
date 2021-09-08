import { css, DefaultTheme } from 'styled-components';

const font = {
  small: css`
    font-size: 1.2rem;
    font-weight: 400;
  `,
  medium: css`
    font-size: 1.6rem;
    font-weight: 500;
  `,
  large: css`
    font-size: 2rem;
    font-weight: 700;
  `,
  xlarge: css`
    font-size: 3rem;
    font-weight: 700;
  `,
};

const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const shadow = css`
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.07);
`;

export const theme: DefaultTheme = {
  color: {
    light_grey1: '#eeeeee',
    light_grey2: '#dddddd',
    grey1: '#888888',
    grey2: '#bbbbbb',
    primary1: '#3be1b4',
    primary2: '#89F4D8',
    primary3: '#32BF9A',
    red: '#f45452',
  },
  font,
  flexCenter,
  shadow,
};

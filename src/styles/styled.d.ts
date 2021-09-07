import "styled-components";
import { css } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      light_grey1: string;
      light_grey2: string;
      grey1: string;
      grey2: string;
      primary1: string;
      primary2: string;
      primary3: string;
      red: string;
    };
    font: {
      small: css;
      medium: css;
      large: css;
      xlarge: css;
    };
    flexCenter: css;
    shadow: css;
  }
}

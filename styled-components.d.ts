import type { CSSProp } from "styled-components";
import Theme from './src/styles/theme';

type ThemeType = typeof Theme;

declare module "styled-components/native" {
  export interface DefaultTheme extends ThemeType { }
}

declare module "react" {
  interface DOMAttributes<T> {
    css?: CSSProp;
  }
}
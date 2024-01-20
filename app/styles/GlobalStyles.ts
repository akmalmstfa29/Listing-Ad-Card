"use client";

import { createGlobalStyle, css } from "styled-components";

const styles = css`
* {
  font-family: "Avenir Next LT Pro";
}
`;

const GlobalStyles = createGlobalStyle`
  ${styles}
`;

export default GlobalStyles;

"use client";

import { createGlobalStyle, css } from "styled-components";

const styles = css`
@import url("https://fonts.cdnfonts.com/css/avenir-next-lt-pro");

* {
  font-family: "Avenir Next LT Pro";
}
`;

const GlobalStyles = createGlobalStyle`
  ${styles}
`;

export default GlobalStyles;

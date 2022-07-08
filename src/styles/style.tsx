import { css, Global } from "@emotion/react";
import styled from "@emotion/styled";

/* css constatns */
const size = {
  mobile: "587px",
  bgLogoShowWidth: "1440px",
};

export const mideaQuery = {
  mobile: `(min-width: ${size.mobile})`,
  bgLogoShowWidth: `(min-width: ${size.bgLogoShowWidth})`,
};

/* common styles */
export const GlobalStyles = (
  <Global
    styles={css`
      html,
      body {
        padding: 0;
        margin: 0;
      }

      body {
        min-height: 100%;
        font-family: Helvetica, Arial, sans-serif;
        background-size: 90%;
      }

      a {
        text-decoration: none;
      }

      * {
        box-sizing: border-box;
      }

      ol,
      ul,
      li {
        list-style: none;
      }

      button {
        width: 100%;
        height: 55px;
        padding: 0;
        line-height: 55px;
        font-weight: 700;
        border-radius: 8px;
      }
    `}
  />
);

export const MainContent = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  & > div {
    width: 100%;
    max-width: ${size.mobile};
    background: #ffffff;
    box-shadow: 0px -11px 41px 0px #0000001a;
    height: 100vh;
    overflow-y: scroll;
  }
`;

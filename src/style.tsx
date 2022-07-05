import { css, Global } from "@emotion/react";
import styled from "@emotion/styled";
// import BgLogo from "../public/images//body-logo-bg.png";

export const GlobalStyles = (
  <Global
    styles={css`
      html,
      body {
        padding: 0;
        margin: 0;
      }

      body {
        background: #d9d9d9;
        min-height: 100%;
        font-family: Helvetica, Arial, sans-serif;
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
    max-width: 587px;
    background: #ffffff;
    box-shadow: 0px -11px 41px 0px #0000001a;
    height: 100vh;
    overflow-y: scroll;
  }
`;

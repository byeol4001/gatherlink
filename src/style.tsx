import { css, Global } from "@emotion/react";
// import styled from "@emotion/styled";

export const GlobalStyles = (
  <Global
    styles={css`
      html,
      body {
        padding: 0;
        margin: 0;
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

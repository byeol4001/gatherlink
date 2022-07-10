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
        background: url("images/body-logo-bg.png") no-repeat center center,
          #d9d9d9;
        min-height: 100%;
        font-family: Helvetica, Arial, sans-serif;
        background-size: 90%;
        @media ${mideaQuery.bgLogoShowWidth} {
          background-size: auto;
        }
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
        background: inherit;
        border: none;
        box-shadow: none;
        border-radius: 0;
        padding: 0;
        overflow: visible;
        cursor: pointer;
      }

      input {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
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
    padding: 30px;
    background: #ffffff;
    box-shadow: 0px -11px 41px 0px #0000001a;
    height: 100vh;
    overflow-y: scroll;
  }
`;

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
`;

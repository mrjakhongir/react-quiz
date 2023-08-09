import styled, { createGlobalStyle } from "styled-components";
// @ts-ignore
import BgImage from "./assets/images/bg-img.jpg";

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
    }

    body {
        background-image: url(${BgImage});
        background-size: cover;
        background-position: center;
        margin: 0;
        padding: 0 20px;
        display: flex;
        justify-content: center
    }

    * {
        box-sizing: border-box;
        font-family: 'Catamaran' sans-serif;
    }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: #fff;
  }

  .score {
    color: #fff;
    font-size: 2rem;
    margin: 0;
  }

  h1 {
    color: transparent;
    font-family: Fascinate Inline, sans-serif;
    background-image: linear-gradient(180deg, #fff, #87f1ff);
    background-size: 100%;
    background-clip: text;
    filter: drop-shadow(2px 2px #87f1ee);
    text-align: center;
    font-size: 70px;
    font-weight: 400;
    margin: 20px;
  }

  .start,
  .next {
    cursor: pointer;
    background: linear-gradient(180deg, #fff, #ffcc91);
    border: 2px solid #d38558;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
    font-size: 1.3rem;
  }

  .start {
    max-width: 200px;
    color: #292929;
  }
`;

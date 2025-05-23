// styles.js (styled-components)

import styled from "styled-components";

export const Container = styled.section`
  width: 100vw;
  /* height: 100vh; */

  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  background-color: #0a0a0a;

  padding-top: 200px;
  position: relative;

  h1 {
    position: absolute;
    top: 50%;
    left: 50%;

    font-family: "feruka";
    font-size: 500px;
    letter-spacing: 40px;
    font-weight: 900;
    transform: translate(-50%, -100%);
    border-radius: 10px;
  }

  .video-container {
    width: 80%;

    width: 80%;
    height: 700px;
    max-width: 1400px;

    position: relative;

    top: 50%;
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #515151;
      filter: blur(40px);

      z-index: 1;
    }

    #videodemo {
      position: relative;
      object-fit: cover;
      height: 100%;
      width: 100%;
      border-radius: 15px;
      z-index: 999;
    }
  }

  @media (max-width: 380px) {
    h1 {
      font-size: 60px;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 120px !important;
      letter-spacing: 2px !important;
      transform: translate(-50%, -200%);
    }

    .video-container {
      width: 100%;
      height: 400px;
    }
  }

  @media (max-width: 767px) {
    h1 {
      font-size: 140px;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    h1 {
      font-size: 200px;
    }
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    h1 {
      font-size: 320px;
    }

    .content {
      /* margin-top: 400px; */
    }
  }

  @media (min-width: 1281px) and (max-width: 1440px) {
    h1 {
      font-size: 400px;
    }
  }

  @media (min-width: 1441px) {
    h1 {
      font-size: 460px;
    }
  }
`;

export const Content = styled.div`
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  transform: translateY(-30%);

  .info {
    font-size: 18px;
    text-align: center;
    opacity: 0.99;

    margin-bottom: 140px;
    max-width: 900px;
  }
`;

export const Image = styled.img`
  width: 2000px;
  z-index: 9;
  /* display: none; */

  top: 0;
`;

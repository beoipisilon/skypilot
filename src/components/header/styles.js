import styled from "styled-components";

export const Container = styled.header`
  width: 100vw;

  height: 100vh;

  background-color: #0505055d;

  display: flex;
  justify-content: center;
  align-self: center;

  video {
    position: absolute;
    object-fit: cover;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: -1; /* Colocar o vídeo atrás do conteúdo */

    pointer-events: none;
  }

  .center-header {
    position: absolute;
    background-color: #dadada11;
    height: 100vh;
    z-index: 1;
    width: 50%;
  }

  @media (max-width: 1160px) {
  }

  @media (max-width: 940px) {
  }

  @media (max-width: 835px) {
  }

  @media (max-width: 590px) {
  }

  @media (max-width: 670px) {
  }
  @media (max-width: 480px) {
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  z-index: 3;

  span {
    font-family: "feruka", sans-serif;
    font-size: 170px;
    line-height: 135px;
    font-weight: 800;

    color: #e2e2e2;
    letter-spacing: 3px;

    transform: translateY(100px);
  }

  img {
    position: absolute;
    height: 600px;
    object-fit: cover;
    z-index: 1;
    transform: translateY(-170px) rotate(30deg);
  }

  #transparent {
    color: transparent;
    -webkit-text-stroke: 0.5px #e2e2e2;
    text-shadow: none;
  }

  @media (max-width: 1160px) {
    img {
      height: 560px !important;
    }
  }

  @media (max-width: 1080px) {
    img {
      height: 490px !important;
    }
  }

  @media (max-width: 940px) {
    img {
      height: 410px !important;
    }
  }

  @media (max-width: 835px) {
    img {
      height: 340px !important;
    }
  }

  @media (max-width: 670px) {
    img {
      height: 300px !important;
      transform: translateY(-110px) rotate(30deg);
    }
    span {
      font-size: 130px;
      line-height: 110px;
    }
  }

  @media (max-width: 590px) {
    img {
      height: 250px !important;
      transform: translateY(-90px) rotate(30deg);
    }
  }

  @media (max-width: 480px) {
    img {
      height: 210px !important;
      transform: translateY(-60px) rotate(30deg);
    }
    span {
      font-size: 120px;
      line-height: 95px;
    }
  }
`;

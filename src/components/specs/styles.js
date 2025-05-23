import styled from "styled-components";

export const Container = styled.section`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  background-color: #0a0a0a;

  background-size: 100%;
  background-position: center center;

  box-shadow: -1px -20px 20px 2px #0a0a0a;
  position: relative;

  img {
    height: 400px;
    object-fit: contain;
    z-index: 9999999;
    margin-top: 90px;
  }

  .title_product {
    position: absolute;
    top: 63%;
    left: 50%;
    font-size: 260px;
    transform: translate(-50%, -30%);

    font-family: "ster";
    z-index: 0;

    text-transform: uppercase;

    text-align: center;
    line-height: 210px;

    color: transparent;
    -webkit-text-stroke: 2px #e2e2e2;
    text-shadow: none;

    transition: 0.4s;
  }

  .title_content {
    display: flex;
    justify-content: center;
    align-items: center;

    flex-direction: column;

    margin-top: 230px;

    h3 {
      color: #e2e2e2;
      text-align: center;

      font-size: 60px;
      line-height: 50px;

      strong {
        color: #faa23e;
      }
    }

    .desc {
      width: 50%;
      text-align: center;
      margin-top: 20px;
    }
  }

  @media (max-width: 1100px) {
    .title_product {
      font-size: 200px;
      line-height: 160px;
      top: 69%;
    }
  }

  @media (max-width: 940px) {
    .desc {
      width: 60% !important;
    }
  }

  @media (max-width: 835px) {
    .title_product {
      font-size: 160px !important;
      line-height: 130px;
      top: 74% !important;
    }
    .desc {
      width: 70% !important;
    }

    .slide img {
      width: 80% !important;
    }
  }

  @media (max-width: 590px) {
    .title_product {
      top: 78% !important;
    }
  }

  @media (max-width: 670px) {
    .title_product {
      font-size: 110px !important;
      line-height: 90px;
    }
    .desc {
      width: 80% !important;
    }
  }
  @media (max-width: 480px) {
    .title_product {
      font-size: 80px !important;
      line-height: 50px;
    }
    .desc {
      width: 90% !important;
    }
  }
`;

export const SeparadorContainer = styled.div`
  position: relative;
  width: 20%;
  display: flex;
  align-items: center;
  margin: 20px 0;
`;

export const Linha = styled.hr`
  border: none;
  height: 1px;
  width: 300px;
  margin: 0 auto;
  background-color: #faa23e;
`;

export const Texto = styled.span`
  position: absolute;
  background-color: #0a0a0a;
  padding: 0 10px;
  color: #faa23e;
  font-weight: bold;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
`;

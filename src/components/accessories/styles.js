import styled from "styled-components";

export const Container = styled.section`
  width: 95vw;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  background-color: #0a0a0a;

  .info {
    font-size: 17px;
    line-height: 17px;
    margin-bottom: 140px;
    width: 80%;
    text-align: center;
  }

  .title-section {
    font-size: 80px;
    margin-bottom: 0 !important;
  }

  @media (max-width: 480px) {
    .title-section {
      font-size: 50px !important;
    }
  }
`;

export const Grid = styled.div`
  width: 100vw;

  padding: 0 170px;

  display: grid;
  grid-template-columns: repeat(3, minmax(250px, 1fr));
  grid-template-rows: 340px 200px 200px;

  gap: 25px;
  grid-template-areas:
    "control control gimbal"
    "batery cam gimbal"
    "batery cam gimbal";

  .item {
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 10px 30px;
    transition: 0.4s;
    position: relative;

    border: 1px solid transparent;

    &:hover {
      border-color: #dbdbdb;
    }

    background: rgb(19, 19, 19);

    img {
      object-fit: cover;
      height: 280px;

      position: absolute;
    }

    border-radius: 8px;

    .desc {
      font-size: 18px;
      line-height: 19px;
      font-weight: 300;
      opacity: 0.8;
      width: 60%;

      text-align: center;
      width: 100%;
    }

    .title {
      font-family: "feruka";
      font-size: 50px;
      letter-spacing: 2px;
      text-align: center;
      margin-bottom: 10px;
    }
  }

  .content {
    display: flex;
    justify-content: center;
    align-items: center;

    flex-direction: column;
  }

  .batery {
    grid-area: batery;

    flex-direction: column;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);

    justify-content: flex-end;
    padding-bottom: 40px;

    img {
      transform: scale(1.2) translateY(-60px);
      top: 0;
    }
  }

  .cam {
    grid-area: cam;

    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);

    align-items: flex-start;
    padding-top: 40px;

    img {
      transform: scale(1.9) translateY(60px) translateX(-10px);
      bottom: 0;
    }
  }

  .control {
    grid-area: control;
    clip-path: polygon(0 -100%, 100% 0, 100% 100%, 0% 100%);

    img {
      transform: scale(2) scaleX(-1) translateX(20px);
      left: 20px;
    }

    justify-content: flex-end;
    padding-right: 50px;
    .content {
      width: 60%;
    }
  }

  .gimbal {
    grid-area: gimbal;

    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);

    align-items: flex-start;
    padding-top: 70px;

    img {
      transform: scale(2.3) scaleX(-1);
      bottom: 50px;
    }
  }

  @media (max-width: 500px) {
    justify-content: center;
  }

  @media (max-width: 730px) {
    .desc {
      font-size: 15px !important;
      line-height: 16px !important;
    }

    .title {
      font-size: 40px !important;
    }
  }

  @media (max-width: 910px) {
    img {
      display: none;
    }

    .item {
      justify-content: center !important;
      align-items: center !important;
      padding-top: 0 !important;
    }
  }

  @media (max-width: 1281px) {
    grid-area: auto;
    grid-template-columns: 1fr;
    grid-template-rows: 300px 300px 300px 300px;

    grid-template-areas: initial;

    .item {
      grid-area: initial;
    }

    .cam {
      justify-content: flex-start;
      padding-right: 50px;
      align-items: center;
      .content {
        width: 60%;
      }

      img {
        right: -90px;
      }
    }

    .batery {
      justify-content: center;
      padding-right: 50px;
      align-items: flex-end;
      .content {
        width: 60%;
      }
      img {
        transform: scale(1.2) translateY(0px);
        left: -220px;
      }
    }

    .gimbal {
      justify-content: flex-start;
      padding-right: 50px;
      .content {
        width: 60%;
      }
      img {
        right: 30px;
        bottom: 0;
        transform: scale(1.3);
      }
    }
  }

  @media (min-width: 1441px) {
  }
`;

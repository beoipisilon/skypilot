import styled from "styled-components";

export const Container = styled.section`
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  padding-top: 180px;

  background-color: #0a0a0a;

  .content {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    width: 90%;
  }

  .item {
    border-radius: 8px;
    padding: 20px;
    flex: 1;
    max-width: 30%;

    h3 {
      /* font-family: "feruka"; */
      text-transform: uppercase;
      font-size: 60px;
      line-height: 55px;
      margin-top: 0;
    }

    p {
      margin-top: 20px;
    }
  }

  @media (max-width: 480px) {
    .item h3 {
      font-size: 40px;
      line-height: 35px;
    }

    .item p {
      font-size: 11px;
      width: 70%;
    }
  }

  @media (max-width: 767px) {
  }

  @media (max-width: 1024px) {
    .content {
      flex-direction: column;

      .item {
        max-width: 100%;
      }
    }
  }

  @media (max-width: 1280px) {
    .content {
      flex-direction: column;

      .item {
        max-width: 100%;
      }
    }
  }

  @media (max-width: 1440px) {
  }
`;

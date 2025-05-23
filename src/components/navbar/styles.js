import styled from "styled-components";

export const Container = styled.nav`
  width: 100vw;
  height: 80px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 18px 40px;

  z-index: 999999;

  * {
    color: #e2e2e2;
    font-family: "Poppins", sans-serif;
  }

  position: absolute;
  top: 0;

  h2 {
    font-family: "covent", sans-serif !important;
  }

  #logo {
    height: 20px;
    object-fit: cover;
  }

  a {
    font-size: 18px;

    font-weight: 300;
    margin: 0 18px;
    cursor: pointer;
    transition: 0.4s;

    z-index: 9999999999;

    &:hover {
      letter-spacing: 1px;
    }
  }

  button {
    background-color: #e2e2e200; /* Cor de fundo */
    border: 1px solid #e2e2e2;
    color: #e2e2e2; /* Cor do texto */
    font-size: 14px; /* Tamanho da fonte */
    font-weight: 300;
    cursor: pointer;
    padding: 10px 20px; /* Espaçamento interno (vertical horizontal) */
    border-radius: 15px; /* Borda arredondada */
    cursor: pointer; /* Cursor ao passar o mouse */

    transition: 0.4s ease;
  }

  @media (max-width: 480px) {
  }

  @media (max-width: 767px) {
    h2,
    button {
      display: none;
    }

    justify-content: center !important;
  }

  @media (max-width: 1024px) {
  }

  @media (max-width: 1280px) {
  }

  @media (max-width: 1440px) {
  }
`;

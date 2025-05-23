// src/styles/GlobalStyles.js
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @font-face {
    font-family: 'feruka';
    src: url('/feruka.otf') format('opentype');
    font-weight: normal;
    font-style: normal;
  }

  
  @font-face {
    font-family: 'ster';
    src: url('/ster.otf') format('opentype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'engraves';
    src: url('/engraves.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }



  @font-face {
    font-family: 'covent';
    src: url('/covent.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  body {
    background-color: #0a0a0a;
    color: #333;
    overflow-x: hidden;
  }

*{
  font-family: 'Poppins';color: #e2e2e2;
}


  ::-webkit-scrollbar {
    width: 4px; /* Largura da scrollbar vertical */
    height: 4px; /* Altura da scrollbar horizontal */
  }

  ::-webkit-scrollbar-track {
    background: #0a0a0a; /* Cor do fundo da track */
    border-radius: 10px; /* Borda arredondada da track */
  }

  ::-webkit-scrollbar-thumb {
    background: #faa23e; /* Cor do thumb */
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #dd8b2e; /* Cor do thumb no hover */
  }

  h1 {
    font-size: 2em;
    margin-bottom: 0.5em;
  }

  button {
    font-family: inherit;
  }

  .custom-arrow {
  position: absolute;
  top: 50%;
  height: 90px;
  width: 90px;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  border: 1px solid #e2e2e2;
  border-radius: 50%;
  color: white;
  font-size: 34px;
  padding: 10px;
  cursor: pointer;
  z-index: 1;

  transition: 0.4s;
}

@media (max-width: 980px) {
  .custom-arrow {
    display: none !important;
  }
  }

  @media (max-width: 1200px) {


  .custom-arrow-prev {
  left: 50px !important;
}

.custom-arrow-next {
  right: 50px !important;
}
  }

.custom-arrow-prev {
  left: 170px;
}

.custom-arrow-next {
  right: 170px;
}

.custom-arrow:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

.fade-up-enter {
  opacity: 0;
  transform: translateY(20px);
}

.fade-up-enter-active {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 300ms, transform 300ms;
}

.fade-up-exit {
  opacity: 1;
  transform: translateY(0);
}

.fade-up-exit-active {
  opacity: 0;
  transform: translateY(-20px);
  transition: opacity 300ms, transform 300ms;
}

.carousel .slider-wrapper{
  padding: 50px 0 !important; 
}
`;

export default GlobalStyles;

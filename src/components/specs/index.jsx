import React, { useState } from "react";
import { Container, Linha, SeparadorContainer, Texto } from "./styles";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const mockData = [
  {
    product: "Air 2S",
    desc: "Leve e compacto, o DJI Air 2S é o drone perfeito para fazer tomadas aéreas e muitos outros registros em movimento. Pesa apenas 600 g e tem sensor CMOS de 1”. E nesta oferta, vem com um combo de acessórios capaz de elevar sua experiência. Confira tudo que ele é capaz de fazer.",
    price: 1000.0,
    color: "white",
    image: "/drone5.png",
  },
  {
    product: "Mavic Air 2",
    desc: "O design aprimorado do Protetor de hélices integrado do Avata 2 o torna mais leve e ágil, permitindo voar livremente em espaços confinados. [5] Liberar o acelerador no RC Motion 3 ou pressionar o botão de trava faz com que o drone pare, permitindo lidar com situações inesperadas com calma.",
    price: 1200.0,
    color: "gray",
    image: "/drone5.png",
  },
  {
    product: "Mini 2",
    desc: "Quadros completos em 8K com ProRes RAW/CDNG | Câmera super ampla em FPV com visão noturna de 1/1,8” | Configurações duplas da estrutura da aeronave: Inclinação aprimorada & Giro em 360° | Transmissão de vídeos O3 Pro com controle duplo | Posicionamento RTK em nível de centímetros e Trajetória Pro ",
    price: 450.0,
    color: "silver",
    image: "/drone5.png",
  },
  {
    product: "Phantom 4 Pro",
    desc: "Potente e mega compacto, o DJI Mini 3 Pro é tão poderoso quanto é portátil. Pesando menos de 249 g, contando com recursos de segurança otimizados e em conformidade com as regras de voo da maioria das regiões, este é o Mini drone mais seguro já criado pela DJI. ",
    price: 1600.0,
    color: "white",
    image: "/drone5.png",
  },
  {
    product: "Inspire 2 Pro",
    desc: "Pequeno mas poderoso, o DJI Mini 2 é capaz de gravar vídeos em 4K com Zoom de 4x, além de Panorâmicas de tirar o fôlego, permitindo explorar uma nova perspectiva do mundo. | Modos inteligentes | Tempo máx. de voo de 31 min. | Resistência ao vento de até 38 km/h (nível 5)",
    price: 3000.0,
    color: "black",
    image: "/drone5.png",
  },
];

const SpecsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const onChangeSlide = (index) => {
    setCurrentSlide(index);
  };

  const renderArrowPrev = (onClickHandler, hasPrev, label) =>
    hasPrev && (
      <button
        type="button"
        onClick={onClickHandler}
        className="custom-arrow custom-arrow-prev"
      >
        &lt;
      </button>
    );

  const renderArrowNext = (onClickHandler, hasNext, label) =>
    hasNext && (
      <button
        type="button"
        onClick={onClickHandler}
        className="custom-arrow custom-arrow-next"
      >
        &gt;
      </button>
    );

  return (
    <Container>
      <div className="title_content">
        <SeparadorContainer>
          <Linha />
          <Texto>Drones</Texto>
        </SeparadorContainer>
        <h3>
          Detalhes do <strong>Produto</strong>
        </h3>

        <span className="desc"> {mockData[currentSlide].desc}</span>
      </div>

      <TransitionGroup>
        <CSSTransition
          key={mockData[currentSlide].product}
          timeout={300}
          classNames="fade-up"
        >
          <h4 className="title_product">{mockData[currentSlide].product}</h4>
        </CSSTransition>
      </TransitionGroup>

      <Carousel
        showThumbs={false}
        showArrows={true}
        showIndicators={true}
        showStatus={false}
        selectedItem={currentSlide}
        onChange={onChangeSlide}
        renderArrowPrev={renderArrowPrev}
        renderArrowNext={renderArrowNext}
        infiniteLoop
        className="carousel-container"
      >
        {mockData.map((item, index) => (
          <div key={index}>
            <img src={item.image} alt={item.product} />
          </div>
        ))}
      </Carousel>
    </Container>
  );
};

export default SpecsSection;

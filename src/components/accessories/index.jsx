import React from "react";
import { Container, Grid } from "./styles";

const AccessoriesSection = () => {
  return (
    <Container>
      <h1 className="title-section">ACESSÓRIOS</h1>
      <p className="info">
        Melhore sua experiência de voo com câmeras de alta definição, estabilizadores avançados, baterias de longa duração e controles com tela integrada.
      </p>
      <Grid>
        <div className="item control">
          <img src="/control2.png" alt="Controle com tela" className="product" />
          <div className="content">
            <h3 className="title">CONTROLES</h3>
            <p className="desc">
              Controle seu drone com total precisão e visualize a transmissão em tempo real diretamente na tela do controle integrado.
            </p>
          </div>
        </div>
        <div className="item cam">
          <img src="/cam2.png" alt="Lente de câmera" className="product" />
          <div className="content">
            <h3 className="title">LENTES DE CÂMERAS</h3>
            <p className="desc">
              Capture imagens incrivelmente nítidas e vídeos cinematográficos com lentes de alta performance projetadas para drones.
            </p>
          </div>
        </div>
        <div className="item batery">
          <img src="/baw.png" alt="Bateria" className="product" />
          <div className="content">
            <h3 className="title">BATERIAS DURÁVEIS</h3>
            <p className="desc">
              Prolongue seus voos com baterias de alto desempenho, ideais para operações longas e gravações extensas.
            </p>
          </div>
        </div>
        <div className="item gimbal">
          <img src="/gimbal.png" alt="Estabilizador gimbal" className="product" />
          <div className="content">
            <h3 className="title">ESTABILIZADORES</h3>
            <p className="desc">
              Garanta imagens suaves e profissionais, mesmo em movimentos rápidos, com estabilizadores de última geração.
            </p>
          </div>
        </div>
      </Grid>
    </Container>
  );
};

export default AccessoriesSection;

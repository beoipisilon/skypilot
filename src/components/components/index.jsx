import React from "react";
import { Container } from "./styles";

const ComponentsSection = () => {
  return (
    <Container>
      <div className="content">
        <div className="item">
          <h3>
            Motor <br /> & Helices
          </h3>
          <p>
            Os motores e lâminas dos drones proporcionam potência e estabilidade
            excepcionais, garantindo um voo suave e preciso, mesmo em condições
            adversas.
          </p>
        </div>
        <div className="item">
          <h3>
            Câmeras <br />& Suspensão
          </h3>
          <p>
            A câmera de alta resolução, aliada ao estabilizador avançado,
            assegura imagens nítidas e vídeos sem tremores, capturando todos os
            detalhes com clareza.
          </p>
        </div>
        <div className="item">
          <h3>
            Drone <br />& Material
          </h3>
          <p>
            Os corpos do drones é projetado para ser robusto e leve,
            proporcionando durabilidade e facilidade de manobra, ideal para
            diversas aplicações e ambientes.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default ComponentsSection;

// DemoSection.js

import React from "react";
import { Container, Content, Image } from "./styles";

const AccessoriesSection = () => {
  return (
    <Container>
      <Image id="dronedemo" src="/dddd.png" />
      <h1>CAMÊRA</h1>

      <Content className="content">
        <div className="video-container">
          <video muted id="videodemo" autoPlay loop>
            <source src="https://res.cloudinary.com/dmceve2cp/video/upload/v1719951664/DJI_-_Introducing_DJI_Mini_3_Pro_mezx1m.mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </Content>
    </Container>
  );
};

export default AccessoriesSection;

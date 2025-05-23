import React from "react";
import {
  FooterContainer,
  FooterContent,
  FooterSection,
  FooterTitle,
  FooterLinks,
  FooterLink,
  FooterSocialIcons,
  FooterIcon,
  FooterBottomText,
} from "./styles";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterTitle>Sobre Nós</FooterTitle>
          <FooterLinks>
            <FooterLink href="#">Nossa História</FooterLink>
            <FooterLink href="#">Equipe</FooterLink>
            <FooterLink href="#">Carreiras</FooterLink>
            <FooterLink href="#">Promoção</FooterLink>
          </FooterLinks>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Serviços</FooterTitle>
          <FooterLinks>
            <FooterLink href="#">Manutenção</FooterLink>
            <FooterLink href="#">Suporte Técnico</FooterLink>
            <FooterLink href="#">Consultoria</FooterLink>
            <FooterLink href="#">Documentação</FooterLink>
            <FooterLink href="#">Afiliados</FooterLink>
          </FooterLinks>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Contato</FooterTitle>
          <FooterLinks>
            <FooterLink href="#">Fale Conosco</FooterLink>
            <FooterLink href="#">Localização</FooterLink>
            <FooterLink href="#">FAQ</FooterLink>
          </FooterLinks>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Redes Sociais</FooterTitle>
          <FooterSocialIcons>
            <FooterIcon href="https://facebook.com" target="_blank">
              <FaFacebook />
            </FooterIcon>
            <FooterIcon href="https://twitter.com" target="_blank">
              <FaTwitter />
            </FooterIcon>
            <FooterIcon href="https://instagram.com" target="_blank">
              <FaInstagram />
            </FooterIcon>
          </FooterSocialIcons>
        </FooterSection>
      </FooterContent>
      <FooterBottomText>
        © 2025 SkyPilot. Todos os direitos reservados.
      </FooterBottomText>
    </FooterContainer>
  );
};

export default Footer;

import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #e2e2e2;
  color: #1a1a1a;
  padding: 40px 0;
  text-align: center;

  width: 100%;
  margin-top: 80px;

  * {
    color: #1a1a1a;
    text-transform: uppercase;

    text-align: start;
  }
`;

export const FooterContent = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  @media (min-width: 768px) {
    justify-content: space-between;
  }
`;

export const FooterSection = styled.div`
  margin: 20px 0;
  flex: 1;
  min-width: 200px;
`;

export const FooterTitle = styled.h3`
  margin-bottom: 10px;
  font-size: 18px;
`;

export const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FooterLink = styled.a`
  color: #1a1a1a;
  margin: 5px 0;
  text-decoration: none;
  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }
`;

export const FooterSocialIcons = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 10px;
`;

export const FooterIcon = styled.a`
  color: #1a1a1a;
  font-size: 24px;
  transition: color 0.3s;

  margin-right: 8px;

  width: 50px;
  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid #1a1a1a;
  border-radius: 50%;

  &:hover {
    color: #007bff;
  }
`;

export const FooterBottomText = styled.div`
  margin-top: 20px;
  font-size: 14px;
  text-align: center;
`;

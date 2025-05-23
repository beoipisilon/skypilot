import styled from "styled-components";

export const FAQContainer = styled.div`
  width: 75%;
  margin: 0 auto;
  padding: 20px;
  background-color: #0a0a0a;

  padding-top: 100px;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 80px;

  font-size: 80px;
  line-height: 70px;
  cursor: pointer;
  color: #e2e2e2;

  text-transform: uppercase;

  @media (max-width: 500px) {
    font-size: 50px;
  }
`;

export const Icon = styled.span`
  font-size: 20px;
  margin-left: 10px;

  position: absolute;
  top: 15px;
  right: 15px;
`;

export const FAQItem = styled.div`
  margin-bottom: 30px;
  width: 80%;
  padding: 10px;
  border-bottom: 1px solid #424242;

  position: relative;
`;

export const Question = styled.div`
  font-weight: bold;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 25px;
  line-height: 27px;

  max-width: 80%;

  color: #e2e2e2;
  transition: 0.4s;

  &:hover {
    color: #c4c4c4;
  }
`;

export const Answer = styled.div`
  margin-top: 5px;
  color: #949494;
  max-width: 90%;

  padding-bottom: 20px;
`;

import React, { useState } from "react";
import { FAQContainer, FAQItem, Question, Answer, Title, Icon } from "./styles";
import { FaPlus, FaTimes } from "react-icons/fa";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question:
        "Como carregar a bateria do meu drone de maneira segura e eficiente ?",
      answer:
        "Para carregar a bateria do seu drone de maneira segura e eficiente, sempre use o carregador fornecido pelo fabricante. Conecte a bateria ao carregador e insira na tomada. Evite carregar a bateria em temperaturas extremas e nunca deixe a bateria sem supervisão durante o carregamento. Certifique-se de armazenar a bateria em um local seco e seguro quando não estiver em uso.",
    },
    {
      question:
        "Qual é o tempo médio de voo de um drone e como posso estendê-lo ?",
      answer:
        "O tempo médio de voo de um drone varia conforme o modelo e a capacidade da bateria, geralmente entre 15 a 30 minutos. Para estender o tempo de voo, considere usar baterias de maior capacidade, reduza o peso adicional do drone e voe em condições climáticas favoráveis. Manter a bateria em boas condições e realizar a manutenção regular do drone também pode ajudar a otimizar o tempo de voo.",
    },
    {
      question:
        "Como posso estabilizar meu drone durante o voo em diferentes condições climáticas ?",
      answer:
        "Para estabilizar seu drone durante o voo, utilize estabilizadores avançados e configure o drone em um ambiente com pouco vento. Ajuste as configurações de voo para otimizar o desempenho em diferentes condições climáticas. Além disso, pratique voar em ambientes controlados antes de enfrentar condições mais desafiadoras. Manter o firmware do drone atualizado também pode melhorar a estabilidade do voo.",
    },
    {
      question:
        "Posso usar qualquer câmera no meu drone ou preciso de modelos específicos ?",
      answer:
        "É importante usar câmeras compatíveis com o seu modelo de drone para garantir uma montagem segura e funcionamento adequado. Verifique as especificações do drone e escolha câmeras recomendadas pelo fabricante. Usar câmeras específicas garante melhor qualidade de imagem, integração com o sistema de controle e maior durabilidade durante o voo.",
    },
    {
      question:
        "Quais são os principais cuidados que devo ter ao armazenar meu drone ?",
      answer:
        "Ao armazenar seu drone, certifique-se de removê-lo de ambientes úmidos ou com temperaturas extremas. Desconecte e armazene as baterias separadamente, mantendo-as em um local seguro e seco. Limpe o drone e seus componentes antes de guardá-los e use caixas ou bolsas de armazenamento adequadas para proteger contra danos físicos. Realize inspeções regulares para garantir que não haja danos ou corrosão.",
    },
    {
      question:
        "Como realizar a manutenção regular do meu drone para garantir seu desempenho ideal ?",
      answer:
        "Para garantir o desempenho ideal do seu drone, realize uma manutenção regular que inclua a limpeza das hélices, verificação de danos e substituição de peças desgastadas. Atualize o firmware conforme necessário e inspecione as baterias para evitar inchaço ou danos. Teste os sensores e calibrações do drone regularmente e siga as orientações do fabricante para cuidados específicos. Manter um registro de manutenção pode ajudar a monitorar a saúde do seu drone ao longo do tempo.",
    },
  ];
  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <FAQContainer>
      <Title>
        perguntas <br /> frequentes
      </Title>
      {faqs.map((faq, index) => (
        <FAQItem key={index}>
          <Question onClick={() => toggleAnswer(index)}>
            {faq.question}
            <Icon>{openIndex === index ? <FaTimes /> : <FaPlus />}</Icon>
          </Question>
          {openIndex === index && <Answer>{faq.answer}</Answer>}
        </FAQItem>
      ))}
    </FAQContainer>
  );
};

export default FAQ;

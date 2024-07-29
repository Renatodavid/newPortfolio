import React from "react";
import { FaBookReader, FaRegBookmark } from "react-icons/fa";
import TimelineItem from "./TimelineItem";
import SkillItem from "./SkillItem";

const Resume = () => {
  return (
    <section>
      <header>
        <h2 className="h2 article-title">Currículo</h2>
      </header>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaBookReader />
          </div>
          <h3 className="h3">Formação</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="Análise e Desenvolvimento de Sistemas"
            date="Jan - 2020 — Dez - 2022"
            description="Formado em análise e desenvolvimento de sistemas pela Unopar ."
          />
          <TimelineItem
            title="Alura One T6"
            date="jan -2024 — jun - 2024"
            description="Bootcamp voltado para se tornar um desenvolvedor BackEnd. onde estão sendo apresentadas as
principais ferramentas para o desenvolvimento, como HTML, CSS, Bootstrap, Java, JavaScript,
MySQL, Node.js, React, MongoDB, e outros frameworks."
          />
          <TimelineItem
            title="Desenvolvedor Full Stack: Recode-Pro"
            date="Mai -2023 — Dez - 2023"
            description="Bootcamp de formação de programador Full Stack. onde estão sendo apresentadas as
principais ferramentas para o desenvolvimento, como HTML, CSS, Bootstrap, Java, JavaScript,
MySQL, Node.js, React, Express, MongoDB, e outros frameworks. 540Hrs."
          />
          <TimelineItem
            title="Técnico Mecânica Industrial, WMSCHOLL "
            date="Jan - 2019 — Dez -2020"
            description="Técnico em mecânica industrial, especializado em documentações para liberações de serviço de manutenção."
          />
        </ol>
      </div>
      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaRegBookmark />
          </div>
          <h3 className="h3">Experiência Profissional</h3>
        </div>
        <ol className="timeline-list">
        <TimelineItem
            title="Residente/ Instituto Localiza"
            date="01/07/2024 até os dias atuais"
            description="Iniciei uma nova etapa na minha carreira como 
            residente no Instituto Localiza, em parceria com a Recode e
             o LocalizaLabs, onde atuo como desenvolvedor back-end e front-end no time de
              'Utilização do Carro'. Este programa de residência de 6 meses proporciona
               uma oportunidade única para aplicar minhas habilidades técnicas em um
                ambiente colaborativo e inovador"
          />
           <TimelineItem
            title="Recode-Pro- Projeto HAMANI Desenvolvedor Full Stack Jr Temporário."
            date="Abr — 2024 — Dias atuais "
            description="Desenvolvi APIs eficazes e bem documentadas em Java e C# para o back-end, além
de ter experiência na criação de interfaces de usuário responsivas utilizando
tecnologias atuais para o front-end, trabalhando em Squad formado por 5
desenvolvedoresJr, sempre visando a comunicação e um código limpo e bem
estruturado. Front-end criação de sites responsivos utilizando a linguagem
Javascprit, next.js, react.js, bootstrap, html e css."
          />
          <TimelineItem
            title="Fest Fabrica Escola de Software e teste Product Onwer / Scrum / Temporário"
            date="Mar — 2024 — Jul — 2024 "
            description="Product Owner: Coordenei o desenvolvimento de produtos personalizados para clientes,
garantindo metas atendidas, comunicação eficaz e ajustes estratégicos para o sucesso do
projeto.
Scrum Master: Facilitei a implementação eficaz do Scrum, removendo obstáculos,
mantendo a equipe focada e promovendo colaboração para a entrega contínua de valor
ao cliente."
          />
         
        </ol>
      </div>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaRegBookmark />
          </div>
          <h3 className="h3">Certificações</h3>
        </div>
        <ol className="timeline-list">
        
          <TimelineItem
            title="FEST- Fábrica Escola de Software e Teste"
            date="jan 2024 — jan 2024 + 80h"
            description="FEST- Fábrica Escola de Software e Teste Introdução à Qualidade de Software. Com carga horaria de
80h."
          />
          <TimelineItem
            title="Recode-Pro: Desenvolvedor fullstack "
            date="2023 — 2024 + 540h"
            description="Certificação em Desenvolvimento FullStack pela Recode, com enfoque em tecnologias para
front-end, back-end e banco de dados. Destaque para habilidades interpessoais, metodologias
ágeis e inclusão , desenvolvendo front-end com interfaces responsivas e Ápis bem
documentadas para o back-end."
          />
          <TimelineItem
            title="One Programação T6/ Alura"
            date="2024 — 2024+ 330h"
            description="Iniciante em Programação T6: Especializando-me na área de programação back-end.
Adquiri habilidades em lógica de programação utilizando a linguagem JAVA.
Aprofundei meu conhecimento em linguagens de programação amplamente utilizadas no
mundo, preparando-me para enfrentar desafios nessa área."
          />
          <TimelineItem
            title="One Programação T7/ Alura"
            date="2024 — 2024+ 330h"
            description="Iniciante em Programação T7: Especializando-me na área de programação FrontEnd.
Adquiri habilidades em lógica de programação utilizando a linguagem React.
Aprofundei meu conhecimento em linguagens de programação amplamente utilizadas no
mundo, preparando-me para enfrentar desafios nessa área."
          />
        </ol>
      </div>

      <div className="skill">
        <h3 className="h3 skills-title">HABILIDADES TÉCNICAS</h3>
        <ul className="skills-list content-card">
          <SkillItem title="HTML & CSS" value={90} />
          <SkillItem title="Metodogias Ágeis" value={90} />
          <SkillItem title="Metodologia Scrum" value={90} />
          <SkillItem title="Bootstrap" value={80} />
          <SkillItem title="Java" value={70} />
          <SkillItem title="JavaScript" value={60} />
          <SkillItem title="C#" value={50} />
          <SkillItem title="Vite + React" value={40} />
          <SkillItem title="React" value={40} />
      
        </ul>
      </div>
    </section>
  );
};

export default Resume;

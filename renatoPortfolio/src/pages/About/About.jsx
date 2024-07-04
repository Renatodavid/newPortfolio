/* eslint-disable react/no-unescaped-entities */

import { useEffect, useState } from "react";
import Testimonial from "./Testimonial";
import Service from "./Service";

const servicesData = [
  {
    icon: "/images/java.png",
    title: "JAVA",
    description:
      "Estou mergulhando no estudo de Java para construir uma base sólida em uma linguagem que impulsiona inovações em diversas indústrias.",
  },
  {
    icon: "/images/c-sharp.png",
    title: "C-Sharp",
    description: "Estou mergulhando no estudo de C# para construir uma base sólida em uma linguagem que é fundamental para o desenvolvimento de software corporativo .",
  },
  {
    icon: "/images/react.png",
    title: "REACT + VITE",
    description:
      "Estou mergulhando no estudo de React com Vite para dominar ferramentas que aceleram o desenvolvimento e melhoram a performance das minhas aplicações.",
  },
  {
    icon: "/images/logic.png",
    title: "Lógica",
    description:
      "O estudo de lógica está me permitindo entender melhor a estrutura dos algoritmos e melhorar minhas habilidades de programação.",
  },
];

const About = () => {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    fetch("testimonials.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTestimonials(data);
      });
  }, []);
  return (
    <article className="about  active" data-page="about">
      <header>
        <h2 className="h2 article-title">Sobre mim</h2>
      </header>

      <section className="about-text">
        <p>
          Sou um Desenvolvedor Full-Stack, entusiasmado e apaixonado por
          tecnologia. Comecei os estudos na área da programação em 2020 em uma
          formação inicial em ADS pela UNOPAR. No início de 2023 dei o arranque
          para embarcar de vez na área estudando por conta própria e depois
          passando em um processo seletivo pela Recode onde mais de 15 mil
          pessoas se inscreveram.
        </p>

        <p>
          Com uma trajetória profissional marcada pelo dinamismo, atuo como
          Desenvolvedor Full Stack Jr na Recode, onde aprimoro continuamente
          minhas habilidades desenvolvimento web. Nosso trabalho está focado em
          aplicar práticas de gestão ágil para otimizar processos e impulsionar
          entregas de valor.
        </p>
      </section>

      {/* <!--
      - service
    --> */}

      <section className="service">
        <h3 className="h3 service-title">O que estou estudando</h3>

        <ul className="service-list">
          {servicesData.map((service, index) => (
            <Service
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </ul>
      </section>

      {/* <!--
      - testimonials
    --> */}

      <section className="testimonials">
        <h3 className="h3 testimonials-title">Recomendações</h3>

        <ul className="testimonials-list has-scrollbar">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              name={testimonial.name}
              avatar={testimonial.avatar}
              testimonial={testimonial.testimonial}
            />
          ))}
        </ul>
      </section>

      {/* <!--
      - clients
    --> */}

      <section className="clients">
        <h3 className="h3 clients-title">Deploys</h3>

        <ul className="clients-list has-scrollbar">
          <li className="clients-item">
            <a href="https://primeirositerecode.netlify.app/">
              <img src="images/agencia1.jpg" alt="client logo" />
            </a>
          </li>
          <ul className="clients-list has-scrollbar">
            <li className="clients-item">
              <a href="https://renatomportfolio.netlify.app/">
                <img src="images/1portfolio.jpg" alt="client logo" />
              </a>
            </li>
          </ul>
          <ul className="clients-list has-scrollbar">
          <li className="clients-item">
            <a href="https://agenciadeviagensrr.netlify.app/">
              <img src="images/Agencia2.jpg" alt="client logo" />
            </a>
          </li>
        </ul>
        </ul>
        <ul className="clients-list has-scrollbar">
          <li className="clients-item">
            <a href="https://advocacianew.netlify.app/">
              <img src="images/advogados.jpg" alt="client logo" />
            </a>
          </li>
          <ul className="clients-list has-scrollbar">
          <li className="clients-item">
            <a href="https://renatomarquesdavid.netlify.app/">
              <img src="images/quemsoueu.jpg" alt="client logo" />
            </a>
          </li>
          <ul className="clients-list has-scrollbar">
          <li className="clients-item">
            <a href="https://grupomarquesbr.netlify.app/">
              <img src="images/lucas1.jpg" alt="client logo" />
            </a>
          </li>
        </ul>
        </ul>
        </ul>

       
      </section>
    </article>
  );
};

export default About;

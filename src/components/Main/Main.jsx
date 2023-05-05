import React from "react";
import "../../scss/bootstrap_mash.scss";
import "./Main.scss";

import html5Img from "../../images/skills/html5.png";
import css3Img from "../../images/skills/css3.png";
import reactImg from "../../images/skills/react.png";
import UXimg from "../../images/skills/UX.png";
import gitImg from "../../images/skills/git.png";
import nodeImg from "../../images/skills/image.png";
import sassImg from "../../images/skills/sass.png";
import jsImg from "../../images/skills/js.png";
import ava from "../../images/ava_2.png";
import { aboutMeText } from "../../utils/aboutme";
import Typewriter from "typewriter-effect";
import ContactForm from "./ContactForm/ContactForm";
import Weather from "../Weather/weather";

function Main() {
  return (
    <main className="main container">
      <div className="row">
        <section className="greeting col-md-7">
          <h1 className="greeting__upper-text">
            <Typewriter
              options={{
                autoStart: false,
                loop: false,
                cursor: "|",
                delay: 0,
              }}
              onInit={(typewriter) => {
                typewriter.pauseFor(0).typeString("Привет, я Михаил.").start();
              }}
            />
          </h1>
          <h2 className="greeting__lower-text">
            И моя мечта стать <br />
            <span className="highlighted-text">
              {`< фронтенд-разработчиком / >`}
            </span>
          </h2>
        </section>
        <section className="myphoto fade-in col-md-5">
          <img className="myphoto__img" src={ava} alt="i'am"></img>
        </section>
      </div>
      <div className="row">
        <section className="aboutme col-md-7">
          <div className="aboutme__wrapper">
            {/* Разделение текста на параграфы для форматирования */}
            <h3 className="aboutme__heading">Познакомимся?</h3>
            {aboutMeText.split("\n").map((paragraph, index) => (
              <p key={index} className="aboutme__text">
                {paragraph}
              </p>
            ))}
            <div className="aboutme__skills">
              <div className="aboutme__skills-wrapper">
                <img
                  src={html5Img}
                  alt="html"
                  className="aboutme__skills-img"
                />
                <img src={css3Img} alt="css" className="aboutme__skills-img" />
                <img src={jsImg} alt="js" className="aboutme__skills-img" />
                <img
                  src={reactImg}
                  alt="react"
                  className="aboutme__skills-img"
                />
                <img src={nodeImg} alt="node" className="aboutme__skills-img" />
                <img src={sassImg} alt="sass" className="aboutme__skills-img" />
                <img src={gitImg} alt="git" className="aboutme__skills-img" />
                <img src={UXimg} alt="ux\ui" className="aboutme__skills-img" />
              </div>
            </div>
          </div>
        </section>
        <section className="informers col-md-5">
          <Weather />
          <ContactForm />
        </section>
      </div>
    </main>
  );
}

export default Main;

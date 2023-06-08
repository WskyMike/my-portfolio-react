import { React } from "react";
import "../../scss/bootstrap_mash.scss";
import "./Main.scss";

import Skills from "../Skills/Skills";
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
            Начинающий <br />
            <span className="highlighted-text">
              {`< frontend-разработчик / >`}
            </span>
          </h2>
        </section>
        <section className="myphoto fade-in col-md-5">
          <img className="myphoto__img" src={ava} alt="i'am"></img>
        </section>
      </div>
      <div className="row">
        <section className="aboutme col-md-7">
          {/* Разделение текста на параграфы для форматирования */}
          <h3 className="aboutme__heading">
            const <span className="highlighted-text-shadow">aboutMeText</span> =
          </h3>
          <div className="aboutme__text-wrapper">
            {aboutMeText.split("\n").map((paragraph, index) => (
              <p key={index} className="aboutme__text">
                {paragraph}
              </p>
            ))}
          </div>
          <ContactForm />
        </section>
        <section className="informers col-md-5">
          <Skills />
          <Weather />
        </section>
      </div>
    </main>
  );
}

export default Main;

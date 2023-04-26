import React from 'react';
import html5Img from '../../images/skills/html5.png';
import css3Img from '../../images/skills/css3.png';
import reactImg from '../../images/skills/react.png';
import UXimg from '../../images/skills/UX.png';
import gitImg from '../../images/skills/git.png';
import nodeImg from '../../images/skills/image.png';
import sassImg from '../../images/skills/sass.png';
import jsImg from '../../images/skills/js.png';
import ava from '../../images/ava_2.png';
import { aboutMeText } from '../../utils/aboutme';
import Typewriter from 'typewriter-effect';
import ContactForm from './ContactForm/ContactForm';
import Weather from '../Weather/weather';
import './Main.css';

const spanStyle = { color: '#98CE00' };

function Main() {
  return (
    <main className="main">
      <div className="main__left-side">
        <div className="greeting">
          <h1 className="greeting__upper-text">
            <Typewriter
              options={{
                autoStart: true,
                loop: false,
                cursor: '|',
              }}
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(100)
                  .typeString('Привет, я Михаил.')
                  .start();
              }}
            />
          </h1>
          <h2 className="greeting__lower-text delay">
            И моя мечта стать <br />{' '}
            <span style={spanStyle}> {`< фронтенд-разработчиком / >`}</span>
          </h2>
        </div>
        <section className="main__aboutme-container">
          {/* Разделение текста на параграфы для форматирования */}
          <h2 className="main__aboutme-heading">Познакомимся?</h2>
          {aboutMeText.split('\n').map((paragraph, index) => (
            <p key={index} className="main__aboutme-text">
              {paragraph}
            </p>
          ))}
          <section className="main__skills">
            <div className="main__skills-container">
              <img src={html5Img} alt="" className="main__skills-img" />
              <img src={css3Img} alt="" className="main__skills-img" />
              <img src={jsImg} alt="" className="main__skills-img" />
              <img src={reactImg} alt="" className="main__skills-img" />
              <img src={nodeImg} alt="" className="main__skills-img" />
              <img src={sassImg} alt="" className="main__skills-img" />
              <img src={gitImg} alt="" className="main__skills-img" />
              <img src={UXimg} alt="" className="main__skills-img" />
            </div>
          </section>
        </section>
      </div>
      <div className="main__right-side">
        <div className="my-photo__container">
          <img className="my-photo__img" src={ava} alt="i'am"></img>
        </div>
        <Weather />
        <ContactForm />
      </div>
    </main>
  );
}

export default Main;

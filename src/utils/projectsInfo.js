import React from "react";
import MoviesExplorerImg from "../images/movies_explorer.webp";
import MestoImg from "../images/mesto.webp";
import RusTravelImg from "../images/russian_travel.webp";
import LearnImg from "../images/how_to_learn.webp";
import WhatsAppImg from "../images/demo_chat.webp";
import movgal from "../images/movgal_1.webp";
import creativemind from "../images/creativemind.webp";
import vangogh from "../images/vangogh.webp";

import {
  RiTailwindCssFill,
  RiReactjsFill,
  RiHtml5Fill,
  RiCss3Fill,
  RiFirebaseFill,
  RiBootstrapFill,
  RiGithubFill,
} from "react-icons/ri";
import { SiExpress, SiVite, SiWebpack } from "react-icons/si";
import { FaSass } from "react-icons/fa";

export const PROJECTS_INFO = [
  {
    id: "1",
    title: "Киногалерея",
    class: "fade-in-1",
    description: "Пет-проект. Выбери фильмы на вечер и добавь в закладки.",
    websiteUrl: "https://moviegallery.tw1.ru/",
    githubUrl: "https://github.com/WskyMike/moviesgallery-pet-react",
    githubIcon: <RiGithubFill />,
    imageUrl: movgal,
    techIcons: [
      { name: "HTML", icon: <RiHtml5Fill /> },
      { name: "CSS", icon: <RiCss3Fill /> },
      { name: "React", icon: <RiReactjsFill /> },
      { name: "Bootstrap", icon: <RiBootstrapFill /> },
      { name: "Firebase", icon: <RiFirebaseFill /> },
      { name: "Vite", icon: <SiVite /> },
    ],
  },
  {
    id: "2",
    title: "WhatsApp Web",
    class: "fade-in-1",
    description: "Для обмена мнениями с любым пользователем WhatsApp.",
    websiteUrl: "https://wskymike.github.io/whatsapp-greenapi-react/",
    githubUrl: "https://github.com/WskyMike/whatsapp-greenapi-react",
    githubIcon: <RiGithubFill />,
    imageUrl: WhatsAppImg,
    techIcons: [
      { name: "HTML", icon: <RiHtml5Fill /> },
      { name: "CSS", icon: <RiCss3Fill /> },
      { name: "React", icon: <RiReactjsFill /> },
      { name: "SASS", icon: <FaSass /> },
    ],
  },
  {
    id: "3",
    title: "Пример верстки",
    class: "fade-in-2",
    description:
      "Адаптивная верстка. Форма обратной связи с валидацией и загрузкой файлов",
    websiteUrl: "https://wskymike.github.io/creative-mind-bureau-test-layout/",
    githubUrl: "https://github.com/WskyMike/creative-mind-bureau-test-layout",
    githubIcon: <RiGithubFill />,
    imageUrl: creativemind,
    techIcons: [
      { name: "HTML", icon: <RiHtml5Fill /> },
      { name: "CSS", icon: <RiCss3Fill /> },
      { name: "React", icon: <RiReactjsFill /> },
      { name: "Tailwind CSS", icon: <RiTailwindCssFill /> },
    ],
  },
  {
    id: "4",
    title: "Пример верстки",
    class: "fade-in-2",
    description: "Адаптивная верстка",
    websiteUrl: "https://wskymike.github.io/vangogh-link-test-layout/",
    githubUrl: "https://github.com/WskyMike/vangogh-link-test-layout",
    githubIcon: <RiGithubFill />,
    imageUrl: vangogh,
    techIcons: [
      { name: "HTML", icon: <RiHtml5Fill /> },
      { name: "CSS", icon: <RiCss3Fill /> },
    ],
  },
  {
    id: "5",
    title: "Movies Explorer",
    class: "fade-in-3",
    description:
      "Дипломный проект. Авторизация, поиск и сохранение в свою базу данных MongoDB.",
    websiteUrl: "https://moviesexplorer.webtm.ru/",
    githubUrl: "https://github.com/WskyMike/movies-explorer-frontend",
    githubIcon: <RiGithubFill />,
    imageUrl: MoviesExplorerImg,
    techIcons: [
      { name: "HTML", icon: <RiHtml5Fill /> },
      { name: "CSS", icon: <RiCss3Fill /> },
      { name: "SASS", icon: <FaSass /> },
      { name: "React", icon: <RiReactjsFill /> },
      { name: "Express", icon: <SiExpress /> },
      { name: "Webpack", icon: <SiWebpack /> },
    ],
  },
  {
    id: "6",
    title: "Mesto",
    class: "fade-in-3",
    description:
      "Регистрируйтесь, делитесь фото в общей ленте вместе с друзьями. Ставьте лайки.",
    websiteUrl: "https://mesto.webtm.ru/",
    githubUrl: "https://github.com/WskyMike/react-mesto-api-full",
    githubIcon: <RiGithubFill />,
    imageUrl: MestoImg,
    techIcons: [
      { name: "HTML", icon: <RiHtml5Fill /> },
      { name: "CSS", icon: <RiCss3Fill /> },
      { name: "React", icon: <RiReactjsFill /> },
      { name: "Express", icon: <SiExpress /> },
      { name: "Webpack", icon: <SiWebpack /> },
    ],
  },
  {
    id: "7",
    title: "Russian Travel",
    class: "fade-in-4",
    description:
      "Адаптивный сайт. О путешествии на электричках по нашей необъятной.",
    websiteUrl: "https://wskymike.github.io/russian-travel/",
    githubUrl: "https://github.com/WskyMike/russian-travel",
    githubIcon: <RiGithubFill />,
    imageUrl: RusTravelImg,
    techIcons: [
      { name: "HTML", icon: <RiHtml5Fill /> },
      { name: "CSS", icon: <RiCss3Fill /> },
    ],
  },
  {
    id: "8",
    title: "How to Learn",
    class: "fade-in-4",
    description: "Статичный сайт. Подсказки по эффективному обучению.",
    websiteUrl: "https://wskymike.github.io/how-to-learn/",
    githubUrl: "https://github.com/WskyMike/how-to-learn",
    githubIcon: <RiGithubFill />,
    imageUrl: LearnImg,
    techIcons: [
      { name: "HTML", icon: <RiHtml5Fill /> },
      { name: "CSS", icon: <RiCss3Fill /> },
    ],
  },
];

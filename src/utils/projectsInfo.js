import MoviesExplorerImg from "../images/movies_explorer.jpg";
import MestoImg from "../images/mesto.jpg";
import RusTravelImg from "../images/russian_travel.jpg";
import LearnImg from "../images/how_to_learn.jpg";
import WhatsAppImg from "../images/demo_chat.png";
import movgal from "../images/movgal_1.jpg";

import ReactIcon from "../images/skills/icons8-react-96.png";
import ExpressIcon from "../images/skills/icons8-express-js-96.png";
import SassIcon from "../images/skills/icons8-sass-96.png";
import HtmlIcon from "../images/skills/html5.png";
import CssIcon from "../images/skills/css3.png";
import GithubIcon from "../images/skills/icons8-github-90.png";
import BootstrapIcon from "../images/bootstrap.svg";
import FirebaseIcon from "../images/firebase.svg";

export const PROJECTS_INFO = [
  {
    id: "1",
    title: "Киногалерея",
    class: "fade-in-1",
    description: "Пет-проект. Выбери фильмы на вечер и добавь в закладки.",
    websiteUrl: "https://moviegallery.tw1.ru/",
    githubUrl: "https://github.com/WskyMike/moviesgallery-pet-react",
    githubIconUrl: GithubIcon,
    imageUrl: movgal,
    techIcons: [
      { name: "HTML", icon: HtmlIcon },
      { name: "CSS", icon: CssIcon },
      { name: "React", icon: ReactIcon },
      { name: "Bootstrap", icon: BootstrapIcon },
      { name: "Firebase", icon: FirebaseIcon },
    ],
  },
  {
    id: "2",
    title: "WhatsApp Web",
    class: "fade-in-1",
    description: "Для обмена мнениями с любым пользователем WhatsApp.",
    websiteUrl: "https://wskymike.github.io/whatsapp-greenapi-react/",
    githubUrl: "https://github.com/WskyMike/whatsapp-greenapi-react",
    githubIconUrl: GithubIcon,
    imageUrl: WhatsAppImg,
    techIcons: [
      { name: "HTML", icon: HtmlIcon },
      { name: "CSS", icon: CssIcon },
      { name: "React", icon: ReactIcon },
      { name: "Sass", icon: SassIcon },
    ],
  },
  {
    id: "3",
    title: "Movies Explorer",
    class: "fade-in-2",
    description: "Регистрируйтесь, ищите фильмы и сохраняйте их в избранное.",
    websiteUrl: "https://moviesexplorer.webtm.ru/",
    githubUrl: "https://github.com/WskyMike/movies-explorer-frontend",
    githubIconUrl: GithubIcon,
    imageUrl: MoviesExplorerImg,
    techIcons: [
      { name: "HTML", icon: HtmlIcon },
      { name: "CSS", icon: CssIcon },
      { name: "React", icon: ReactIcon },
      { name: "Express.js", icon: ExpressIcon },
      { name: "Sass", icon: SassIcon },
    ],
  },
  {
    id: "4",
    title: "Mesto",
    class: "fade-in-3",
    description:
      "Регистрируйтесь, делитесь фото в общей ленте вместе с друзьями. Ставьте лайки.",
    websiteUrl: "https://mesto.webtm.ru/",
    githubUrl: "https://github.com/WskyMike/react-mesto-api-full",
    githubIconUrl: GithubIcon,
    imageUrl: MestoImg,
    techIcons: [
      { name: "HTML", icon: HtmlIcon },
      { name: "CSS", icon: CssIcon },
      { name: "React", icon: ReactIcon },
      { name: "Express.js", icon: ExpressIcon },
    ],
  },
  {
    id: "5",
    title: "Russian Travel",
    class: "fade-in-4",
    description:
      "Адаптивный сайт. О путешествии на электричках по нашей необъятной.",
    websiteUrl: "https://wskymike.github.io/russian-travel/",
    githubUrl: "https://github.com/WskyMike/russian-travel",
    githubIconUrl: GithubIcon,
    imageUrl: RusTravelImg,
    techIcons: [
      { name: "HTML", icon: HtmlIcon },
      { name: "CSS", icon: CssIcon },
    ],
  },
  {
    id: "6",
    title: "How to Learn",
    class: "fade-in-4",
    description: "Статичный сайт. Подсказки по эффективному обучению.",
    websiteUrl: "https://wskymike.github.io/how-to-learn/",
    githubUrl: "https://github.com/WskyMike/how-to-learn",
    githubIconUrl: GithubIcon,
    imageUrl: LearnImg,
    techIcons: [
      { name: "HTML", icon: HtmlIcon },
      { name: "CSS", icon: CssIcon },
    ],
  },
];

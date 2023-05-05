import MoviesExplorerImg from '../images/movies_explorer.jpg';
import MestoImg from '../images/mesto.jpg';
import RusTravelImg from '../images/russian_travel.jpg';
import LearnImg from '../images/how_to_learn.jpg';

import ReactIcon from '../images/skills/icons8-react-96.png';
import ExpressIcon from '../images/skills/icons8-express-js-96.png';
import SassIcon from '../images/skills/icons8-sass-96.png';
import HtmlIcon from '../images/skills/html5.png';
import CssIcon from '../images/skills/css3.png';
import GithubIcon from '../images/skills/icons8-github-90.png';

export const PROJECTS_INFO = [
  {
    id: '1',
    title: 'Movies Explorer',
    class: 'fade-in-1',
    description:
      'SPA-приложение. Регистрируйтесь, ищите фильмы и сохраняйте их в избранное.',
    websiteUrl: 'https://diploma.front.nomorepartiesxyz.ru/',
    githubUrl: 'https://github.com/WskyMike/movies-explorer-frontend',
    githubIconUrl: GithubIcon,
    imageUrl: MoviesExplorerImg,
    techIcons: [
      { name: 'React', icon: ReactIcon },
      { name: 'Express.js', icon: ExpressIcon },
      { name: 'Sass', icon: SassIcon },
    ],
  },
  {
    id: '2',
    title: 'Mesto',
    class: 'fade-in-2',
    description:
      'SPA-приложение. Регистрируйтесь, делитесь фото в общей ленте вместе с другими пользователями. Ставьте лайки.',
    websiteUrl: 'https://wskymike.github.io/mesto/',
    githubUrl: 'https://github.com/WskyMike/mesto',
    githubIconUrl: GithubIcon,
    imageUrl: MestoImg,
    techIcons: [
      { name: 'React', icon: ReactIcon },
      { name: 'Express.js', icon: ExpressIcon },
    ],
  },
  {
    id: '3',
    title: 'Russian Travel',
    class: 'fade-in-3',
    description:
      'Адаптивный сайт. О путешествии на электричках по нашей необъятной.',
    websiteUrl: 'https://wskymike.github.io/russian-travel/',
    githubUrl: 'https://github.com/WskyMike/russian-travel',
    githubIconUrl: GithubIcon,
    imageUrl: RusTravelImg,
    techIcons: [
      { name: 'HTML', icon: HtmlIcon },
      { name: 'CSS', icon: CssIcon },
    ],
  },
  {
    id: '4',
    title: 'How to Learn',
    class: 'fade-in-4',
    description: 'Статичный сайт. Подсказки по эффективному обучению.',
    websiteUrl: 'https://wskymike.github.io/how-to-learn/',
    githubUrl: 'https://github.com/WskyMike/how-to-learn',
    githubIconUrl: GithubIcon,
    imageUrl: LearnImg,
    techIcons: [
      { name: 'HTML', icon: HtmlIcon },
      { name: 'CSS', icon: CssIcon },
    ],
  },
];

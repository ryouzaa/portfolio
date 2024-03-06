import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  python,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  php,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  streamit,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  /*{
    id: 'contact',
    title: 'Contact',
  },*/
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  }
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'Python',
    icon: python,
  },
  {
    name: 'PHP',
    icon: php,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Backend Engineer',
    company_name: 'Digital Sekuriti Indonesia',
    icon: kelhel,
    iconBg: '#333333',
    date: 'Jan 2023 - Present',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'StreamIT',
    description: 'Website for streaming film using Rest-API.',
    tags: [
      {
        name: 'Typescript',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: streamit,
    repo: 'https://github.com/ryouzaa/',
    demo: 'https://flathcreative.my.id/',
  }
];

export { services, technologies, experiences, projects };

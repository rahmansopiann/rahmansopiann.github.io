import { Project } from './types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with real-time inventory management and secure payment integration.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    githubUrl: 'https://github.com/example/ecommerce',
    demoUrl: 'https://demo-ecommerce.example.com',
    image: 'https://picsum.photos/seed/shop/800/600'
  },
  {
    id: '2',
    title: 'AI Image Generator',
    description: 'An application that generates original artwork using generative AI models and allows users to share their creations.',
    technologies: ['Next.js', 'OpenAI API', 'Firebase', 'Framer Motion'],
    githubUrl: 'https://github.com/example/ai-art',
    demoUrl: 'https://ai-art.example.com',
    image: 'https://picsum.photos/seed/ai/800/600'
  },
  {
    id: '3',
    title: 'Task Management Dashboard',
    description: 'A collaborative productivity tool with drag-and-drop task boards, analytics, and team chat features.',
    technologies: ['TypeScript', 'Express', 'PostgreSQL', 'Socket.io'],
    githubUrl: 'https://github.com/example/tasks',
    image: 'https://picsum.photos/seed/tasks/800/600'
  },
  {
    id: '4',
    title: 'Weather Tracker Pro',
    description: 'Highly accurate weather forecasting app with interactive maps and personalized location-based alerts.',
    technologies: ['React Native', 'OpenWeather API', 'Lottie'],
    githubUrl: 'https://github.com/example/weather',
    image: 'https://picsum.photos/seed/weather/800/600'
  },
  {
    id: '5',
    title: 'Cryptocurrency Analytics',
    description: 'Real-time crypto asset tracker with advanced charting and predictive pricing indicators.',
    technologies: ['Vue.js', 'D3.js', 'CoinGecko API'],
    githubUrl: 'https://github.com/example/crypto',
    image: 'https://picsum.photos/seed/crypto/800/600'
  }
];

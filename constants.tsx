
import { Project, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Food Delivery App',
    description: 'A comprehensive food ordering system with real-time tracking, cart management, and seamless UI/UX built with Flutter.',
    tech: ['Flutter', 'Dart', 'Firebase', 'Clean UI'],
    imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800',
    link: 'https://github.com/ashik116'
  },
  {
    id: '2',
    title: 'Doctor Appointment App',
    description: 'A healthcare solution allowing patients to book appointments, view doctor profiles, and manage medical history.',
    tech: ['Flutter', 'Rest API', 'Provider', 'Shared Preferences'],
    imageUrl: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=800',
    link: 'https://github.com/ashik116'
  },
  {
    id: '3',
    title: 'Modern News App',
    description: 'Real-time news application fetching latest headlines globally with category filtering and bookmarking features.',
    tech: ['Flutter', 'News API', 'GetX', 'MVC'],
    imageUrl: 'https://images.unsplash.com/photo-1504711432869-0df85248df99?auto=format&fit=crop&q=80&w=800',
    link: 'https://github.com/ashik116'
  },
  {
    id: '4',
    title: 'E-Commerce Store',
    description: 'Feature-rich shopping app with product categories, search functionality, and integrated payment gateway simulation.',
    tech: ['Flutter', 'Firebase', 'State Management', 'Stripe'],
    imageUrl: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800',
    link: 'https://github.com/ashik116'
  }
];

export const SKILLS: Skill[] = [
  { name: 'Flutter', level: 95, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
  { name: 'Dart', level: 92, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg' },
  { name: 'Firebase', level: 88, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
  { name: 'Java', level: 75, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'Git & GitHub', level: 90, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'UI/UX Design', level: 85, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' }
];

export const BIOGRAPHY = `
I'm Ashikur Rahman, a dedicated Mobile Application Developer specializing in Flutter and Dart. 
I have a strong passion for building high-quality, user-friendly mobile applications for both Android and iOS platforms. 
I focus on writing clean, maintainable code and staying updated with the latest industry trends to deliver the best possible solutions.
`;


import { Project, Skill, Experience } from './types';

// প্রোফাইল ছবি: আপনার দেওয়া ফেসবুক লিঙ্কটি ব্যবহার করা হয়েছে
export const PROFILE_IMAGE_URL = 'https://scontent.fdac198-1.fna.fbcdn.net/v/t39.30808-1/540236666_6555189431417833_970764748899717074_n.jpg?stp=c0.0.1470.1470a_dst-jpg_s320x320_tt6&_nc_cat=103&_nc_cb=99be929b-f3b7c874&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeFsQPe2-SFaw9ODKgT94D0PIiTEOT_jU6kiJMQ5P-NTqWqY9SVev8GJgWNBGjDQTsXleQHmkm5tIiuopndWG0VH&_nc_ohc=4xohyQtQ6vsQ7kNvwFQTxnZ&_nc_oc=AdnxFXRrfpvkWnTHaMvO7wXsTEpT7xyQLAKfUwmX3AB2dVHjo9ETt9p4MnM05BGeKhoQta5pt39k-HypJB5KDfuR&_nc_zt=24&_nc_ht=scontent.fdac198-1.fna&_nc_gid=RgDDyC6Xo9H2gAKhBiTsrg&oh=00_AfqVWHTL9bAZwhUpnFU8V6wSIk-E6C5-h05MBeQSRIUEyA&oe=69665D4A'; 

export const NAME = 'Ashikur Rahman';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Safe Drive - Speed Tracking',
    description: 'A safety-focused app that tracks vehicle speed in real-time and alerts users using Google Maps and geolocation APIs.',
    tech: ['Flutter', 'Google Maps', 'Geolocator'],
    imageUrl: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=800',
    githubLink: 'https://github.com/Ashik116/Safe-Drive',
  },
  {
    id: '2',
    title: 'E-Commerce UI Kit',
    description: 'A comprehensive and performant e-commerce application UI with smooth animations and state management.',
    tech: ['Flutter', 'Dart', 'GetX'],
    imageUrl: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800',
    githubLink: 'https://github.com/Ashik116/E-commerce-App'
  },
  {
    id: '3',
    title: 'Official Portfolio',
    description: 'My interactive portfolio built with Flutter Web and optimized for performance and accessibility.',
    tech: ['Flutter Web', 'Animations', 'Rive'],
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    githubLink: 'https://github.com/Ashik116/Ashik116.github.io',
    demoLink: 'https://ashik116.github.io/'
  }
];

export const SKILLS: Skill[] = [
  { name: 'Flutter', level: 95, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg', category: 'Frontend' },
  { name: 'Dart', level: 90, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg', category: 'Frontend' },
  { name: 'Firebase', level: 85, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg', category: 'Backend' },
  { name: 'REST API', level: 90, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', category: 'Backend' },
  { name: 'Git & GitHub', level: 92, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', category: 'Tools' },
  { name: 'App Store/Play Store', level: 88, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg', category: 'Tools' }
];

export const EXPERIENCES: Experience[] = [
  {
    company: 'Digital Pylot',
    role: 'Lead Application Developer',
    period: 'October 2025 - Present',
    description: 'Leading the development team to build scalable and high-performance cross-platform applications.'
  },
  {
    company: 'Regnum Resources Ltd.',
    role: 'Mobile Application Developer',
    period: 'February 2022 - October 2025',
    description: 'Developed and maintained complex Flutter applications, focusing on architectural patterns and smooth UI experiences.'
  },
  {
    company: 'Dot Com Systems Ltd. with ICT Division',
    role: 'Trainer (Flutter Development)',
    period: 'September 2021 - February 2022',
    description: 'Provided professional training on Flutter and Dart to aspiring developers as part of an ICT Division project.'
  },
  {
    company: 'Systech Digital Limited',
    role: 'Technical Support Engineer',
    period: 'January 2021 - February 2021',
    description: 'Ensured technical stability and provided engineering support for digital enterprise solutions.'
  }
];

export const BIOGRAPHY = `
I am Ashikur Rahman, a professional Flutter Developer based in Dhaka. 
With experience spanning from training to technical support and leading development teams, 
I specialize in building high-quality, efficient, and user-friendly mobile applications.
Currently, I am driving innovation as a Lead Application Developer at Digital Pylot.
`;

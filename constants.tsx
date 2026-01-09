
import { Project, Skill, Experience } from './types';

// প্রোফাইল ছবি: আপনার দেওয়া ফেসবুক লিঙ্কটি ব্যবহার করা হয়েছে
export const PROFILE_IMAGE_URL = 'https://scontent.fdac198-1.fna.fbcdn.net/v/t39.30808-1/540236666_6555189431417833_970764748899717074_n.jpg?stp=c0.0.1470.1470a_dst-jpg_s320x320_tt6&_nc_cat=103&_nc_cb=99be929b-f3b7c874&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeFsQPe2-SFaw9ODKgT94D0PIiTEOT_jU6kiJMQ5P-NTqWqY9SVev8GJgWNBGjDQTsXleQHmkm5tIiuopndWG0VH&_nc_ohc=4xohyQtQ6vsQ7kNvwFQTxnZ&_nc_oc=AdnxFXRrfpvkWnTHaMvO7wXsTEpT7xyQLAKfUwmX3AB2dVHjo9ETt9p4MnM05BGeKhoQta5pt39k-HypJB5KDfuR&_nc_zt=24&_nc_ht=scontent.fdac198-1.fna&_nc_gid=RgDDyC6Xo9H2gAKhBiTsrg&oh=00_AfqVWHTL9bAZwhUpnFU8V6wSIk-E6C5-h05MBeQSRIUEyA&oe=69665D4A'; 

export const NAME = 'Ashikur Rahman';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'POS-Tolling System',
    description: 'A professional cross-platform app built with Flutter and REST APIs. Features dynamic menu, real-time orders, and secure user authentication.',
    tech: ['Flutter', 'REST API', 'GetX', 'Auth'],
    imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800',
    githubLink: 'https://github.com/Ashik116/Ashik.Portfolio1',
  },
  {
    id: '2',
    title: 'RHD Toll',
    description: 'Toll Report Monitoring mobile application built using Flutter and integrated with REST APIs for real-time monitoring and reporting.',
    tech: ['Flutter', 'Dart', 'REST API', 'Charts'],
    imageUrl: 'https://images.unsplash.com/photo-1590601448391-6863970632d4?auto=format&fit=crop&q=80&w=800',
    githubLink: 'https://github.com/Ashik116/Ashik.Portfolio1'
  },
  {
    id: '3',
    title: 'Logistics Tracking App',
    description: 'Flutter mobile app for real-time tracking of delivery logistics with push notifications and map integration for route optimization.',
    tech: ['Flutter', 'Google Maps', 'Push Notifications', 'Firebase'],
    imageUrl: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&q=80&w=800',
    githubLink: 'https://github.com/Ashik116/Ashik.Portfolio1',
  }
];

export const SKILLS: Skill[] = [
  { name: 'Flutter', level: 100, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg', category: 'Frontend' },
  { name: 'Dart', level: 100, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg', category: 'Frontend' },
  { name: 'Firebase', level: 95, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg', category: 'Backend' },
  { name: 'REST API', level: 100, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', category: 'Backend' },
  { name: 'Git & GitHub', level: 90, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', category: 'Tools' },
  { name: 'State Management', level: 94, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg', category: 'Frontend' }
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
With experience spanning from lead development to technical training, 
I specialize in building efficient, scalable, and user-centric mobile applications.
Currently leading innovative projects at Digital Pylot.
`;

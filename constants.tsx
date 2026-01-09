
import { Project, Skill, Experience } from './types';

export const PROFILE_IMAGE_URL = 'https://scontent.fdac198-1.fna.fbcdn.net/v/t39.30808-1/540236666_6555189431417833_970764748899717074_n.jpg?stp=c0.0.1470.1470a_dst-jpg_s320x320_tt6&_nc_cat=103&_nc_cb=99be929b-f3b7c874&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeFsQPe2-SFaw9ODKgT94D0PIiTEOT_jU6kiJMQ5P-NTqWqY9SVev8GJgWNBGjDQTsXleQHmkm5tIiuopndWG0VH&_nc_ohc=4xohyQtQ6vsQ7kNvwFQTxnZ&_nc_oc=AdnxFXRrfpvkWnTHaMvO7wXsTEpT7xyQLAKfUwmX3AB2dVHjo9ETt9p4MnM05BGeKhoQta5pt39k-HypJB5KDfuR&_nc_zt=24&_nc_ht=scontent.fdac198-1.fna&_nc_gid=RgDDyC6Xo9H2gAKhBiTsrg&oh=00_AfqVWHTL9bAZwhUpnFU8V6wSIk-E6C5-h05MBeQSRIUEyA&oe=69665D4A'; 

export const NAME = 'MD. Ashikur Rahman';
export const EMAIL = 'ashikrahaman542@gmail.com';
export const PHONE = '+8801600199010';

export const LINKEDIN_URL = 'https://www.linkedin.com/in/ashikra';
export const GITHUB_URL = 'https://github.com/Ashik116';

// আপনার গুগল ড্রাইভ লিংকটি সরাসরি ডাউনলোডের জন্য আপডেট করা হয়েছে
export const RESUME_URL = 'https://drive.google.com/uc?export=download&id=1i25_YOIIuhzOHQSfr4on5RFaI5jCGh8L'; 

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'TCMS (Pos Tolling)',
    description: 'Android app built with Kotlin, Flutter, and Method Channel for robust toll collection systems.',
    tech: ['Flutter', 'Kotlin', 'Dart', 'Method Channel'],
    imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800',
    githubLink: 'https://github.com/Ashik116/Pos-Toll',
  },
  {
    id: '2',
    title: 'RHD TOLL',
    description: 'Toll Reporting application converted from web to APK for real-time monitoring of roads and highways.',
    tech: ['Flutter', 'Dart', 'APK Conversion'],
    imageUrl: 'https://images.unsplash.com/photo-1590601448391-6863970632d4?auto=format&fit=crop&q=80&w=800',
    githubLink: 'https://play.google.com/store/apps/details?id=com.rhdra.tcms&hl=en'
  },
  {
    id: '3',
    title: 'Regnum KPI',
    description: 'Android application for KPI tracking and management using Flutter, Dart, and Provider state management.',
    tech: ['Flutter', 'Provider', 'API Integration'],
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    githubLink: 'https://github.com/Ashik116/Regnum-KPI',
  }
];

export const SKILLS: Skill[] = [
  { name: 'Flutter', level: 100, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg', category: 'Frontend' },
  { name: 'Android / iOS', level: 95, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg', category: 'Frontend' },
  { name: 'Dart / Kotlin', level: 98, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg', category: 'Frontend' },
  { name: 'Java / Swift', level: 85, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', category: 'Frontend' },
  { name: 'SQLite / MySQL', level: 90, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', category: 'Backend' },
  { name: 'Firebase', level: 92, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg', category: 'Backend' }
];

export const EXPERIENCES: Experience[] = [
  {
    company: 'Digital Pylot',
    role: 'Lead Application Developer',
    period: 'October 2025 - Present',
    description: 'Leading mobile application development team, architecting scalable solutions and mentoring junior developers.'
  },
  {
    company: 'Regnum Resource Ltd.',
    role: 'Mobile Application Developer',
    period: 'February 2022 - September 2025',
    description: 'Responsible for leading cross-functional teams to build robust Flutter applications. Designed scalable architectures and optimized performance for RHD Toll Collection apps.'
  },
  {
    company: 'Dot Com System Ltd. with ICT Division',
    role: 'Trainer (Flutter Development)',
    period: 'September 2021 - January 2022',
    description: 'Taught beginner-level students how to build mobile applications using Flutter and Dart. Covered UI design, state management, and API integration.'
  },
  {
    company: 'Systech Digital Ltd.',
    role: 'Technical Support Engineer',
    period: 'January 2021 - March 2021',
    description: 'Managed user data and ensured data integrity. Provided technical support and troubleshooting for server and hardware issues.'
  }
];

export const BIOGRAPHY = `
I am MD. Ashikur Rahman, a Lead Flutter Developer with experience building scalable, high-performance mobile applications for Android and iOS. 
I enjoy transforming complex requirements into clean, maintainable code and intuitive user experiences. 
My work focuses on performance, reliability, and real-world usability. 
`;

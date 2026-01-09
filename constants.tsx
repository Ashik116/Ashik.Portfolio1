
import { Project, Skill, Experience } from './types';

/**
 * 📸 প্রোফাইল ছবি: 
 * আপনার দেওয়া ফেসবুক লিঙ্কটি এখানে সরাসরি যুক্ত করে দেওয়া হয়েছে। 
 * এখন আপনার ছবিটি সাইটে দেখা যাবে।
 */
export const PROFILE_IMAGE_URL = 'https://scontent.fdac198-1.fna.fbcdn.net/v/t39.30808-1/540236666_6555189431417833_970764748899717074_n.jpg?stp=c0.0.1470.1470a_dst-jpg_s320x320_tt6&_nc_cat=103&_nc_cb=99be929b-f3b7c874&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeFsQPe2-SFaw9ODKgT94D0PIiTEOT_jU6kiJMQ5P-NTqWqY9SVev8GJgWNBGjDQTsXleQHmkm5tIiuopndWG0VH&_nc_ohc=4xohyQtQ6vsQ7kNvwFQTxnZ&_nc_oc=AdnxFXRrfpvkWnTHaMvO7wXsTEpT7xyQLAKfUwmX3AB2dVHjo9ETt9p4MnM05BGeKhoQta5pt39k-HypJB5KDfuR&_nc_zt=24&_nc_ht=scontent.fdac198-1.fna&_nc_gid=RgDDyC6Xo9H2gAKhBiTsrg&oh=00_AfqVWHTL9bAZwhUpnFU8V6wSIk-E6C5-h05MBeQSRIUEyA&oe=69665D4A'; 

export const NAME = 'Ashikur Rahman';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'FoodFlow - Delivery Ecosystem',
    description: 'A complete food delivery solution with real-time tracking, dual app interface for customers and riders, and a robust admin dashboard.',
    tech: ['Flutter', 'Firebase', 'Google Maps API', 'GetX'],
    imageUrl: 'https://images.unsplash.com/photo-1526367790999-015070c13b7e?auto=format&fit=crop&q=80&w=800',
    githubLink: 'https://github.com/Ashik116/Ashik.Portfolio1',
    demoLink: '#'
  },
  {
    id: '2',
    title: 'HealthSync - Doctor Booking',
    description: 'Modern healthcare app featuring video consultations, automated appointment reminders, and digital prescription management.',
    tech: ['Flutter', 'Rest API', 'Provider', 'Node.js'],
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
    githubLink: 'https://github.com/Ashik116/Ashik.Portfolio1'
  },
  {
    id: '3',
    title: 'PulseNews AI',
    description: 'AI-powered news aggregator that summarizes long articles and provides personalized feeds based on user reading habits.',
    tech: ['Flutter', 'Dart', 'Gemini AI', 'Hive'],
    imageUrl: 'https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&q=80&w=800',
    githubLink: 'https://github.com/Ashik116/Ashik.Portfolio1',
    demoLink: '#'
  }
];

export const SKILLS: Skill[] = [
  { name: 'Flutter', level: 95, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg', category: 'Frontend' },
  { name: 'Dart', level: 92, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg', category: 'Frontend' },
  { name: 'Firebase', level: 88, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg', category: 'Backend' },
  { name: 'Node.js', level: 70, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', category: 'Backend' },
  { name: 'Git & GitHub', level: 90, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', category: 'Tools' },
  { name: 'Figma', level: 85, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', category: 'Tools' }
];

export const EXPERIENCES: Experience[] = [
  {
    company: 'Tech Solutions Ltd.',
    role: 'Senior Flutter Developer',
    period: '2022 - Present',
    description: 'Leading mobile development for high-traffic apps, mentoring junior devs, and optimizing app performance by 40%.'
  },
  {
    company: 'Creative Apps Agency',
    role: 'Mobile Developer',
    period: '2020 - 2022',
    description: 'Developed and launched over 10 cross-platform apps on Play Store and App Store using Flutter.'
  }
];

export const BIOGRAPHY = `
I'm Ashikur Rahman, a dedicated Senior Mobile Application Developer specializing in Flutter and Dart. 
With over 3 years of professional experience, I build high-performance, user-centric apps.
I am passionate about clean architecture (BLoC, Clean Architecture) and beautiful UI/UX.
`;

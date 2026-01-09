
export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  imageUrl: string;
  githubLink: string;
  demoLink?: string;
}

export interface Skill {
  name: string;
  level: number;
  icon: string;
  category: 'Frontend' | 'Backend' | 'Tools';
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}

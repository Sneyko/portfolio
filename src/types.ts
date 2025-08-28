
export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  techStack: string[];
  imageUrl: string;
  liveUrl?: string;
  repoUrl?: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  institution: string;
  description: string;
}

export interface Skill {
  name: string;
  icon: React.ReactNode;
}

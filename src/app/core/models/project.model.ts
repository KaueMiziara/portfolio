export type ProjectType = 'R&D' | 'Project' | 'Competition' | 'Lecture';

export interface ProjectLink {
  text: string;
  url: string;
}

export interface Project {
  id: string;
  title: string;
  type: ProjectType;
  status: 'Active' | 'Completed' | 'Planned' | 'Winner' | string;
  summary: string;
  tags: string[];
  details?: string;
  link?: ProjectLink;
}

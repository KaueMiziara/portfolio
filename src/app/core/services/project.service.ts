import { Injectable, signal } from '@angular/core';
import { Project } from '../models/project.model';
import { RESEARCH_DATA } from '../data/research.data';
import { PROJECTS_DATA } from '../data/projects.data';
import { COMPETITIONS_DATA } from '../data/competitions.data';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private research = signal<Project[]>(RESEARCH_DATA);
  readonly researchProjects = this.research.asReadonly();

  private projects = signal<Project[]>(PROJECTS_DATA);
  readonly codingProjects = this.projects.asReadonly();

  private competitions = signal<Project[]>(COMPETITIONS_DATA);
  readonly competitionProjects = this.competitions.asReadonly();
}

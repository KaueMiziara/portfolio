import { Injectable, signal } from '@angular/core';
import { Project } from '../models/project.model';
import { RESEARCH_DATA } from '../data/research.data';
import { PROJECTS_DATA } from '../data/projects.data';
import { COMPETITIONS_DATA } from '../data/competitions.data';
import { LECTURES_DATA } from '../data/lectures.data';

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

  private lectures = signal<Project[]>(LECTURES_DATA);
  readonly lectureProjects = this.lectures.asReadonly();
}

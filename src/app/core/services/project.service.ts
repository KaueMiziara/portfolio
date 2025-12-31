import { Injectable, signal } from '@angular/core';
import { Project } from '../models/project.model';
import { RESEARCH_DATA } from '../data/research.data';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private research = signal<Project[]>(RESEARCH_DATA);
  readonly researchProjects = this.research.asReadonly();
}

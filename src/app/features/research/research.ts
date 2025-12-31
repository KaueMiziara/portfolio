import { Component, inject, signal } from '@angular/core';
import { ProjectCard } from '../../shared/components/project-card/project-card';
import { Project } from '../../core/models/project.model';
import { ProjectService } from '../../core/services/project.service';

@Component({
  selector: 'app-research',
  imports: [ProjectCard],
  templateUrl: './research.html',
  styleUrl: './research.css',
})
export class Research {
  private projectService = inject(ProjectService);

  projects = this.projectService.researchProjects;
}

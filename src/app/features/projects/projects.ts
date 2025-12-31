import { Component, inject } from '@angular/core';
import { ProjectCard } from '../../shared/components/project-card/project-card';
import { ProjectService } from '../../core/services/project.service';

@Component({
  selector: 'app-projects',
  imports: [ProjectCard],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  private projectService = inject(ProjectService);
  projects = this.projectService.codingProjects;
}

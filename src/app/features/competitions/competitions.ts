import { Component, inject } from '@angular/core';
import { ProjectCard } from '../../shared/components/project-card/project-card';
import { ProjectService } from '../../core/services/project.service';

@Component({
  selector: 'app-competitions',
  imports: [ProjectCard],
  templateUrl: './competitions.html',
  styleUrl: './competitions.css',
})
export class Competitions {
  private projectService = inject(ProjectService);
  projects = this.projectService.competitionProjects;
}

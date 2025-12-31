import { Component, inject } from '@angular/core';
import { ProjectCard } from '../../shared/components/project-card/project-card';
import { CommunityService } from '../../core/services/community.service';
import { ProjectService } from '../../core/services/project.service';

@Component({
  selector: 'app-community',
  imports: [ProjectCard],
  templateUrl: './community.html',
  styleUrl: './community.css',
})
export class Community {
  private projectService = inject(ProjectService);
  private communityService = inject(CommunityService);

  lectures = this.projectService.lectureProjects;
  events = this.communityService.events;
  articles = this.communityService.articles;
}

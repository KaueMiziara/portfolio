import { Component, computed, input } from '@angular/core';
import { QuantumCard } from '../quantum-card/quantum-card';
import { Project } from '../../../core/models/project.model';

@Component({
  selector: 'app-project-card',
  imports: [QuantumCard],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
})
export class ProjectCard {
  data = input.required<Project>();

  icon = computed(() => {
    switch (this.data().type) {
      case 'R&D':
        return '†';
      case 'Competition':
        return '♛';
      case 'Project':
        return '⚔';
      case 'Lecture':
        return '¶';
      default:
        return '§';
    }
  });

  variant = computed(() => (this.data().status === 'Winner' ? 'gold' : 'default'));
}

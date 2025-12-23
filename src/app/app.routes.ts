import { Routes } from '@angular/router';
import { About } from './features/about/about';

export const routes: Routes = [
  { path: '', component: About },
  {
    path: 'research',
    async loadComponent() {
      return import('./features/research/research').then((m) => m.Research);
    },
  },
  {
    path: 'projects',
    async loadComponent() {
      return import('./features/projects/projects').then((m) => m.Projects);
    },
  },
  {
    path: 'competitions',
    async loadComponent() {
      return import('./features/competitions/competitions').then((m) => m.Competitions);
    },
  },
  {
    path: 'community',
    async loadComponent() {
      return import('./features/community/community').then((m) => m.Community);
    },
  },
];

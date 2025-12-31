import { Project } from '../models/project.model';

export const LECTURES_DATA: Project[] = [
  {
    id: 'intro-vqe',
    title: 'Intro to VQE',
    type: 'Lecture',
    status: 'Teaching',
    summary: 'Delivered two sessions on Variational Quantum Eigensolvers to AI graduate students.',
    tags: ['Teaching', 'AI Graduates', 'Qiskit', 'VQE'],
    details: `<p>Covered the mathematical foundations of the variational principle and guided students through implementing a VQE for H2 molecule ground state energy estimation.</p>`,
    link: { text: 'Download Slides', url: '#' },
  },
  {
    id: 'quantum-basis',
    title: 'Quantum Basis',
    type: 'Lecture',
    status: 'Outreach',
    summary: 'Introduction to superposition and entanglement for high school seniors.',
    tags: ['Outreach', 'High School', 'Physics'],
    details: `<p>A conceptual overview of quantum mechanics without linear algebra, focusing on interference and the potential of quantum computing.</p>`,
  },
];

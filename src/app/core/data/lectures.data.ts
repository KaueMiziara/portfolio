import { Project } from '../models/project.model';

export const LECTURES_DATA: Project[] = [
  {
    id: 'intro-vqe',
    title: 'QML in Practice: The Variational Quantum Eigensolver',
    type: 'Lecture',
    status: 'Lecture',
    summary:
      'Delivered two sessions on Variational Quantum Eigensolvers to both AI graduate and Computer Engineering students.',
    tags: ['Teaching', 'QML', 'Optimization', 'VQE', 'Qiskit'],
    details: `<p>Covered the mathematical foundations of the variational principle and guided students through implementing a VQE for a toy optimization problem.</p>`,
    link: { text: 'Lecture Notes', url: 'https://github.com/KaueMiziara/250919_VQE-lecture-notes' },
  },
  {
    id: 'quantum-basis',
    title: 'Quantum Computing: Far Beyond Web Dev',
    type: 'Lecture',
    status: 'Lecture',
    summary:
      'Introduction to quantum computing concepts for Technical High School students in the Systems Development track.',
    tags: ['Outreach', 'High School', 'QML', 'Cryptography'],
    details: `<p>A conceptual overview of quantum mechanics without heavy math, focusing on interference and the potential of quantum computing to Machine Learning and Cryptography.</p>`,
    // link: { text: 'Check the Slides', url: '#' },
  },
  {
    id: 'rajesh-podcast',
    title: 'Kotlin to Qiskit: Quantum skills redefining future jobs',
    type: 'Lecture',
    status: 'Podcast',
    summary: 'A Podcast episode about the intersection between Classical and Quantum computing.',
    tags: ['Outreach', 'NISQ', 'Hybrid-Computing'],
    details: `<p>A discussion about the similarities and differences between Classical Backend development and Quantum Computing, focusing on near term applications and hybrid models of computation leveraging Cloud ecosystems.</p>`,
    link: { text: 'Watch the Episode', url: 'https://www.youtube.com/watch?v=jpgjGqmNDno' },
  },
];

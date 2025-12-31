import { Project } from '../models/project.model';

export const COMPETITIONS_DATA: Project[] = [
  {
    id: 'medical-qml',
    title: 'Medical QML Analysisç',
    type: 'R&D',
    status: 'Active',
    tags: ['Qiskit', 'Python', 'QNN', 'Scientific Initiation', 'Healthcare'],
    summary:
      'Investigation into Quantum Neural Networks for the early detection of pathologies in medical imaging data.',
    details: `
      <p><strong>Objective:</strong> To determine if Variational Quantum Classifiers (VQC) offer a quantum advantage in dimensionality reduction for MRI datasets compared to classical CNNs.</p>
      <p class="mt-2"><strong>Methodology:</strong> Utilizing Qiskit Machine Learning to construct parameterized quantum circuits that map high-dimensional medical data into the Hilbert space. Currently reproducing results from <em>[Reference Paper]</em> and extending the ansatz to noisy intermediate-scale quantum (NISQ) simulators.</p>
    `,
    link: { text: 'View Repository', url: '#' },
  },
  {
    id: 'dft-sim',
    title: 'DFT vs. VQE Simulation',
    type: 'R&D',
    status: 'Planned',
    tags: ['Phasecraft', 'VQE', 'Chemistry', 'Simulation', 'Error Mitigation'],
    summary:
      'Comparative analysis of Classical Density Functional Theory against VQE ansatzes for molecular ground state energy estimation.',
    details: `
      <p><strong>Scope:</strong> This project aims to benchmark the accuracy of hybrid quantum-classical algorithms (VQE) against standard classical methods (DFT) for small molecules like LiH and BeH2.</p>
      <p class="mt-2"><strong>Focus:</strong> Special emphasis will be placed on implementing error mitigation strategies (Zero Noise Extrapolation) to improve VQE fidelity on noisy hardware simulations.</p>
    `,
  },
];

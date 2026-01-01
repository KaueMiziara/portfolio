import { Project } from '../models/project.model';

export const COMPETITIONS_DATA: Project[] = [
  {
    id: 'quantum-quipu-mining',
    title: 'Mining Logistics - Quantum Quipu',
    type: 'Competition',
    status: 'Winner',
    tags: ['Qiskit', 'VQE', 'Optimization', 'QUBO', 'Logistics'],
    summary:
      '3rd Place Winner. Solved an open-pit mining logistics problem by optimizing fleet routes using VQE and QUBO formulation. Developed for a Quantum Quipu hackathon.',
    details: `
      <p><strong>Challenge:</strong> Optimize the route of a mining fleet to minimize fuel consumption in a realistic open-pit environment governed by Euclidean geometry and dynamic road blockages.</p>

      <p class="mt-2"><strong>Modeling & Formulation:</strong></p>
      <ul class="list-disc list-inside mt-1 ml-1 space-y-1 opacity-90">
        <li>Modeled the mine as a spatial graph (<i>N</i> nodes) with strict adherence to <em>Triangular Inequality</em> to ensure physical realism.</li>
        <li>Implemented dynamic penalty weights (<i>d<sub>ij</sub> = &infin;</i>) to simulate "broken paths" (landslides/maintenance).</li>
        <li>Mapped the <strong>Traveling Salesperson Problem (TSP)</strong> to a QUBO Hamiltonian with spatial and temporal uniqueness constraints.</li>
      </ul>

      <p class="mt-2"><strong>Quantum Execution:</strong></p>
      <ul class="list-disc list-inside mt-1 ml-1 space-y-1 opacity-90">
        <li>Implemented <strong>VQE</strong> using Qiskit's <code>StatevectorEstimator</code>.</li>
        <li>Utilized the <strong>RealAmplitudes</strong> ansatz for hardware efficiency (low depth).</li>
        <li>Optimized parameters via <strong>COBYLA</strong> to successfully converge to the ground state energy, decoding the optimal cyclic route.</li>
      </ul>
    `,
    link: {
      text: 'View Repository',
      url: 'https://github.com/KaueMiziara/SEPCC25hackathon/blob/main/cepcc25.ipynb',
    },
  },

  {
    id: 'ufabc-qff-hackathon',
    title: 'BB84 Protocol - Qiskit Fall Fest',
    type: 'Competition',
    status: 'Winner',
    tags: ['Qiskit', 'BB84', 'QKD', 'Cryptography', 'Education'],
    summary:
      '1st Place Winner. Developed a didactic demonstration of the BB84 QKD protocol, bridging classical cryptography with quantum mechanics using Qiskit.',
    details: `
      <p><strong>Challenge:</strong> Organized during UFABC's Qiskit Fall Fest, the hackathon challenged teams to explain complex quantum concepts in a didactic and accessible way.</p>

      <p class="mt-2"><strong>Our Approach:</strong> Given the critical importance of quantum mechanics to digital security, we chose to demonstrate the <strong>BB84 Quantum Key Distribution</strong> protocol.</p>

      <p class="mt-2"><strong>Technical Execution:</strong> The project was structured as to:</p>
      <ul class="list-disc list-inside mt-1 ml-1 space-y-1 opacity-90">
        <li>Introduce fundamental concepts like <em>Superposition</em>.</li>
        <li>Contextualize the need for Symmetric Cryptography.</li>
        <li>Simulate the full protocol, step-by-step, using the <strong>Qiskit SDK</strong>, visualizing how quantum measurement detects eavesdroppers.</li>
      </ul>
    `,
    link: {
      text: 'View Repository',
      url: 'https://github.com/KaueMiziara/gjk-fallfest-ufabc-2025/blob/main/bb84.ipynb',
    },
  },
];

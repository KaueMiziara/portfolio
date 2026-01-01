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

  {
    id: 'qgss-2025',
    title: 'Qiskit Global Summer School 2025',
    type: 'Project',
    status: 'Completed',
    tags: ['Qiskit', 'Error Correction', 'SQD', 'Quantum Utility'],
    summary:
      "Completed the 'International Year of Quantum' curriculum received the Quantum Excellence Badge. ",
    details: `
      <p><strong>Curriculum Overview:</strong> A deep dive into historical and advanced quantum computing concepts, as a celebration for the International Year of Quantum Utility, emphasizing practical implementation using Qiskit primitives.</p>

      <p class="mt-2"><strong>Labs & Achievements:</strong></p>
      <ul class="list-disc list-inside mt-1 ml-1 space-y-1 opacity-90">
        <li><strong>Lab 1:</strong> <em>Recreating famous experiments:</em> Simulated the very first Quantum Mechanics experiments in Qiskit.</li>
        <li><strong>Lab 2:</strong> <em>Cutting through the noise:</em> Solved a noisy Max-Cut problem using QAOA and Error Mitigation.</li>
        <li><strong>Lab 3:</strong> <em>Chemistry Hamiltonian with SQD:</em> Used the Sample-based Quantum Diagonalization algorithm with error mitigation to optimize noisy quantum chemistry simulations.</li>
        <li><strong>Lab 4:</strong> <em>Quantum Error Correction:</em> Explored quantum error-correcting codes, from the 3-qubit bitflip to complex toric codes.</li>
      </ul>
    `,
    link: {
      text: 'View Badge',
      url: 'https://www.credly.com/badges/39f59d10-443d-4a1e-b7e6-61ee93d6d35b/public_url',
    },
  },

  {
    id: 'qgss-2024',
    title: 'Qiskit Global Summer School 2024',
    type: 'Project',
    status: 'Completed',
    tags: ['Qiskit 1.0', 'Quantum Utility', 'Error Mitigation', 'Excellence'],
    summary:
      "Completed the 'Quantum Utility' curriculum received the Quantum Excellence Badge. Mastered the transition to Qiskit 1.0 and implemented advanced error mitigation techniques.",
    details: `
      <p><strong>Curriculum Overview:</strong> The 2024 school marked the era of 'Quantum Utility,' focusing on extracting reliable expectation values from noisy hardware (100+ qubits) without full error correction.</p>

      <p class="mt-2"><strong>Labs & Achievements:</strong></p>
      <ul class="list-disc list-inside mt-1 ml-1 space-y-1 opacity-90">
        <li><strong>Lab 1:</strong> <em>Transpilation & Optimization:</em> Described how to optimize a quantum circuit.</li>
        <li><strong>Lab 2:</strong> <em>Utility-Scale Layer Fidelity:</em> How to take metrics to analyse error rates.</li>
        <li><strong>Lab 3:</strong> <em>Error Mitigation (ZNE):</em> Showcased a set of error suppression methods.</li>
        <li><strong>Lab 4:</strong> <em>Simulating Nature:</em> Applied error mitigation and optimization techniques to simulate the dynamics of a Heisenberg Spin Chain.</li>
      </ul>
    `,
    link: {
      text: 'View Badge',
      url: 'https://www.credly.com/badges/49db5943-e4ac-4203-8c0a-528be1d300a3/public_url',
    },
  },

  {
    id: 'ibm-quantum-challenge-2024',
    title: 'IBM Quantum Challenge 2024',
    type: 'Project',
    status: 'Completed',
    tags: ['Qiskit', 'ISA Circuit', 'Transpilation', 'VQE'],
    summary:
      'Solved all labs receiving the Achievement Badge. Demonstrated the ability to use Qiskit 1.0 to approach utility-scale quantum experiments and follow Qiskit Patterns to appropriately map, optimize, execute, and process quantum circuits.',
    details: `
      <p><strong>The Challenge:</strong> A global coding competition testing the ability to utilize the latest IBM Quantum hardware features and the Qiskit 1.0 SDK.</p>

      <p class="mt-2"><strong>Labs & Achievements:</strong></p>
      <ul class="list-disc list-inside mt-1 ml-1 space-y-1 opacity-90">
        <li><strong>Lab 1:</strong> <em>Qiskit 1.0 First Steps:</em> Manipulating quantum states using the <code>QuantumCircuit</code> object and Primitives V2.</li>
        <li><strong>Lab 2:</strong> <em>The Transpiler:</em> Mapping circuits to the heavy-hex coupling map of IBM processors efficiently.</li>
        <li><strong>Lab 3:</strong> <em>Circuit Knitting:</em> Decomposing large circuits into smaller fragments to fit limited hardware connectivity.</li>
        <li><strong>Lab 4:</strong> <em>Hardware Execution:</em> Running a full VQE instance on a utility-scale device with error suppression enabled.</li>
      </ul>
    `,
    link: {
      text: 'View Badge',
      url: 'https://www.credly.com/badges/c55ba84a-dd51-4814-921d-5b42bd6b6451/public_url',
    },
  },
];

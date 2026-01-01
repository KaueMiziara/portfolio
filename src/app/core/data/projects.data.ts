import { Project } from '../models/project.model';

export const PROJECTS_DATA: Project[] = [
  {
    id: 'vqe-portfolio-optimization',
    title: 'Quantum Portfolio Optimization',
    type: 'Project',
    status: 'Active',
    tags: ['Qiskit', 'VQE', 'Financial Modeling', 'QUBO', 'Python'],
    summary:
      'Application of the Variational Quantum Eigensolver (VQE) to solve Mean-Variance Portfolio Optimization problems using real historical data from the Brazilian Stock Exchange (B3).',
    details: `
    <p><strong>Scope:</strong> This project investigates the viability of Noisy Intermediate-Scale Quantum (NISQ) algorithms for financial utility. It takes historical ticker data from top-traded assets on the B3 exchange and formulates the portfolio selection as a constrained quadratic optimization problem.</p>

    <p class="mt-2"><strong>Implementation:</strong></p>
    <ul class="list-disc list-inside mt-1">
      <li><strong>Data Pipeline:</strong> Classical pre-processing of asset returns and covariance matrices using Python (Pandas/NumPy).</li>
      <li><strong>Quantum Formulation:</strong> Mapping the quadratic program to a QUBO (Quadratic Unconstrained Binary Optimization) model and subsequently to an Ising Hamiltonian.</li>
      <li><strong>Execution:</strong> Implementing the VQE algorithm via Qiskit, utilizing classical optimizers (COBYLA/SPSA) to tune the parameterized ansatz.</li>
    </ul>

    <p class="mt-2"><strong>Planned Outcome:</strong> A comparative analysis benchmarking the quantum solution against classical solvers to evaluate approximation accuracy and execution time trade-offs.</p>
    `,
    // link: { text: 'View Repository', url: '...' },
  },

  {
    id: 'hpc-galaxy-cluster',
    title: 'HPC Infrastructure Management',
    type: 'Project',
    status: 'Completed',
    tags: ['Linux', 'Cluster Management', 'RAID', 'Bash'],
    summary:
      'Infrastructure management and resource provisioning for a computational cluster dedicated to N-Body Galaxy Dynamics simulations.',
    details: `
    <p><strong>Role:</strong> Responsible for the reliability and architecture of the laboratory's High Performance Computing environment. While the research group focused on the astrophysics of galaxy dynamics, my role was strictly ensuring the computational substrate was performant and available.</p>

    <p class="mt-2"><strong>Key Responsibilities:</strong></p>
    <ul class="list-disc list-inside mt-1">
      <li><strong>Storage Architecture:</strong> Configuration and maintenance of RAID arrays to ensure data redundancy and high-throughput I/O for massive simulation datasets.</li>
      <li><strong>Cluster Administration:</strong> Linux system administration (User management, Security hardening) across the compute nodes.</li>
      <li><strong>Resource Scheduling:</strong> Management of job queues to optimize the utilization of CPU resources during long-running N-body simulations.</li>
    </ul>
    `,
  },

  {
    id: 'ar-topography-sandbox',
    title: 'AR Topographic & Fluid Simulation',
    type: 'Project',
    status: 'Completed',
    tags: ['Real-Time Rendering', 'Simulation', 'Computer Vision', 'Linux'],
    summary:
      'Development and calibration of an Augmented Reality Sandbox for real-time topographic analysis and fluid dynamics simulation, used for disaster monitoring education.',
    details: `
    <p><strong>Context:</strong> A collaborative extension project alongside CEMADEN (National Center for Natural Disaster Monitoring), designed to visualize environmental risks.</p>

    <p class="mt-2"><strong>Technical Implementation:</strong></p>
    <ul class="list-disc list-inside mt-1">
      <li><strong>Hardware-Software Loop:</strong> Integrated Kinect depth sensors with Linux-based simulation software to generate real-time 3D heightmaps of physical sand.</li>
      <li><strong>Fluid Dynamics:</strong> Configured virtual water particle systems to interact with the physical topography, simulating dam failures and flood plains in real-time.</li>
      <li><strong>Calibration:</strong> Performed coordinate mapping between the projector and the sensor array to ensure accuracy in the AR overlay.</li>
    </ul>
    `,
  },
];

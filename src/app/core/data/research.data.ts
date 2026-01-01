import { Project } from '../models/project.model';

export const RESEARCH_DATA: Project[] = [
  {
    id: 'qml-dementia-detection',
    title: 'Quantum Transfer Learning for Dementia Detection',
    type: 'R&D',
    status: 'Planned',
    tags: ['PennyLane', 'Qiskit', 'Hybrid QNN', 'PyTorch', 'Medical Imaging'],
    summary:
      'Implementation of Hybrid Quantum-Classical Neural Networks to enhance dementia detection accuracy in MRI scans using the OASIS-2 dataset.',
    details: `
      <p><strong>Scope:</strong> This undergraduate research project focuses on reproducing and extending the findings of <em>"Quantum Transfer Learning to Boost Dementia Detection" (Bhowmik et al., 2025)</em>. The goal is to validate if quantum-enhanced models can outperform classical baselines in resource-constrained medical scenarios.</p>

      <p class="mt-2"><strong>Methodology:</strong> We are constructing a <strong>"Dressed Quantum Network"</strong> architecture. This involves using a pre-trained classical CNN (LeNet) for feature extraction, freezing its weights, and feeding the latent vectors into a Variational Quantum Circuit (VQC) via Angle Embedding.</p>

      <p class="mt-2"><strong>Roadmap:</strong></p>
      <ul class="list-disc list-inside mt-1">
        <li><strong>Phase 1:</strong> Reproduce the reported 91.29% accuracy benchmark using PyTorch and PennyLane.</li>
        <li><strong>Phase 2:</strong> Benchmark the model's resilience against noise using IBM Qiskit simulators and real hardware backends.</li>
        <li><strong>Phase 3:</strong> Investigate alternative Quantum Feature Maps to optimize the classification boundary.</li>
      </ul>
    `,
    // link: { text: 'View Repository', url: '#' },
  },
  {
    id: 'qedft-hubbard-benchmark',
    title: 'Quantum-Enhanced DFT for Correlated Systems',
    type: 'R&D',
    status: 'Planning',
    tags: ['Yao.jl', 'VQE', 'DFT', 'Fermi-Hubbard', 'Quantum Simulation'],
    summary:
      'Reproduction and extension of the QEDFT algorithm to approximate Exchange-Correlation functionals for the Fermi-Hubbard model, benchmarking simulations against real hardware data.',
    details: `
    <p><strong>Scope:</strong> This research project aims to reproduce the results of the paper <em>"Enhancing density functional theory using the variational quantum eigensolver" (Sheridan et al., 2024)</em>. The core objective is to demonstrate how quantum computers can approximate the Exchange-Correlation (XC) functional to boost classical DFT accuracy in strongly correlated systems, specifically using the Fermi-Hubbard model as a benchmark.</p>

    <p class="mt-2"><strong>Methodology:</strong> The approach utilizes a hybrid quantum-classical scheme. We employ the Variational Quantum Eigensolver (VQE) to generate XC functionals from small lattice instances (e.g., 1x4, 2x2) on a quantum processor. These functionals are then interpolated and injected into a classical DFT loop to simulate larger inhomogeneous systems. The implementation will initially leverage the <strong>Yao.jl</strong> framework in Julia to match the reference paper's stack.</p>

    <p class="mt-2"><strong>Roadmap:</strong></p>
    <ul class="list-disc list-inside mt-1">
      <li><strong>Phase 1:</strong> Theoretical review of Lattice DFT and the Hubbard Model, followed by the reproduction of the paper's results using Julia and Yao.jl.</li>
      <li><strong>Phase 2:</strong> Expand the analysis by explicitly comparing simulator performance vs. real hardware execution data, addressing the gap in graphical visualizations noted in the original work.</li>
      <li><strong>Phase 3:</strong> Cross-framework benchmarking (porting the solution to frameworks like Qiskit or PennyLane) and extending the model to support <strong>magnetized systems</strong> (spin-polarized DFT).</li>
    </ul>
  `,
    // link: { text: 'View Repository', url: '#' },
  },
];

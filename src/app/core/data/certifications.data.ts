import { Certification } from '../models/certification.model';

export const CERTIFICATIONS_DATA: Certification[] = [
  {
    title: 'IBM Qiskit Developer Certified',
    issuer: 'IBM Quantum',
    date: 'Certification Pending (Jan 2026)',
    type: 'Certification',
    highlight: true,
    icon: '★',
    iconColor: 'text-yellow-500',
  },
  {
    title: 'Qiskit Global Summer School 25',
    issuer: 'IBM Quantum',
    date: '2025 (Excellence)',
    type: 'Summer School',
    highlight: false,
    icon: '♦',
    iconColor: 'text-rune-blue',
  },
  {
    title: 'Qiskit Global Summer School 24',
    issuer: 'IBM Quantum',
    date: '2024 (Participation)',
    type: 'Summer School',
    icon: '♦',
    iconColor: 'text-rune-blue',
  },
  {
    title: 'Quantum Machine Learning',
    issuer: 'IBM Learning Badge',
    date: 'Advanced',
    type: 'Badge',
    icon: '►',
    iconColor: 'text-chainmail',
  },
  {
    title: 'Qiskit Foundations',
    issuer: 'IBM Learning Badge',
    date: 'Intermediate',
    type: 'Badge',
    icon: '►',
    iconColor: 'text-chainmail',
  },
  {
    title: 'Backend Engineering',
    issuer: 'Alura / Oracle ONE',
    date: 'Completed',
    type: 'Certification',
    icon: '►',
    iconColor: 'text-chainmail',
  },
];

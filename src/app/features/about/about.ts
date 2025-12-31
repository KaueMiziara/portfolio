import { Component } from '@angular/core';
import { QuantumCard } from '../../shared/components/quantum-card/quantum-card';
import { QuantumTag } from '../../shared/components/quantum-tag/quantum-tag';

@Component({
  selector: 'app-about',
  imports: [QuantumCard, QuantumTag],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {}

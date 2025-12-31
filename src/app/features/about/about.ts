import { Component } from '@angular/core';
import { QuantumCard } from '../../shared/components/quantum-card/quantum-card';

@Component({
  selector: 'app-about',
  imports: [QuantumCard],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {}

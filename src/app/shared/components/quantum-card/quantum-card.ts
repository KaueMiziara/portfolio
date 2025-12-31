import { CommonModule } from '@angular/common';
import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-quantum-card',
  imports: [CommonModule],
  templateUrl: './quantum-card.html',
  styleUrl: './quantum-card.css',
})
export class QuantumCard {
  title = input.required<string>();
  icon = input<string>('†');

  variant = input<'default' | 'gold'>('default');

  isOpen = signal(false);

  toggle() {
    this.isOpen.update((v) => !v);
  }
}

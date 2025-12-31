import { Component, input } from '@angular/core';

@Component({
  selector: 'app-quantum-tag',
  imports: [],
  templateUrl: './quantum-tag.html',
  styleUrl: './quantum-tag.css',
})
export class QuantumTag {
  tag = input.required<string>();
}

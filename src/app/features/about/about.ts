import { Component, computed, inject } from '@angular/core';
import { QuantumCard } from '../../shared/components/quantum-card/quantum-card';
import { CertificationService } from '../../core/services/certification.service';
import { SocialLinks } from '../../shared/components/social-links/social-links';

@Component({
  selector: 'app-about',
  imports: [QuantumCard, SocialLinks],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  private certService = inject(CertificationService);

  allCerts = this.certService.certifications;
  highlightedCerts = computed(() => this.allCerts().filter((c) => c.highlight));
}

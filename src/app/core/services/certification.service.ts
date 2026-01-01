import { Injectable, signal } from '@angular/core';
import { Certification } from '../models/certification.model';
import { CERTIFICATIONS_DATA } from '../data/certifications.data';

@Injectable({
  providedIn: 'root',
})
export class CertificationService {
  private data = signal<Certification[]>(CERTIFICATIONS_DATA);
  readonly certifications = this.data.asReadonly();
}

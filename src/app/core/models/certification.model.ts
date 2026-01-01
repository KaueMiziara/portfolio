export interface Certification {
  title: string;
  issuer: string;
  date: string;
  type: 'Certification' | 'Badge' | 'Degree' | 'Certificate';

  highlight?: boolean;
  icon?: string;
  iconColor?: string;
}

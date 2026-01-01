export interface Certification {
  title: string;
  issuer: string;
  date: string;
  type: 'Certification' | 'Badge' | 'Degree' | 'Summer School';

  highlight?: boolean;
  icon?: string;
  iconColor?: string;
}

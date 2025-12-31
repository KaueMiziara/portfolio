export interface TimelineEvent {
  date: string;
  title: string;
  location: string;
  description?: string;
}

export interface Article {
  title: string;
  platform: 'Medium' | 'Dev.to' | 'LinkedIn' | 'Blog';
  readTime: string;
  url: string;
}

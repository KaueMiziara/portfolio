import { Injectable, signal } from '@angular/core';
import { EVENTS_DATA } from '../data/events.data';
import { Article, TimelineEvent } from '../models/community.model';
import { ARTICLES_DATA } from '../data/articles.data';

@Injectable({
  providedIn: 'root',
})
export class CommunityService {
  private eventTimeline = signal<TimelineEvent[]>(EVENTS_DATA);
  readonly events = this.eventTimeline.asReadonly();

  private articleData = signal<Article[]>(ARTICLES_DATA);
  readonly articles = this.articleData.asReadonly();
}

import { Component } from '@angular/core';
import { ArticlesService } from './articles.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'conduit';
  subtitle = 'A place to share your <u>knowledge.</u>';

  get list() {
    return this.articlesService.list;
  }

  constructor(private articlesService: ArticlesService) {}
}

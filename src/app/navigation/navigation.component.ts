import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  getCurrentPage(): string {
    const url = this.router.url;

    return url.substring(url.lastIndexOf('/')).replace('/', '');
  }

  isPageActive(page: string): boolean {
    return this.getCurrentPage() === page;
  }

  getActive(...pages: string[]): string {
    for (const page in pages) {
      console.log(pages);

      if (this.isPageActive(page)) {
        return 'active';
      }
    }
    return '';
  }

}

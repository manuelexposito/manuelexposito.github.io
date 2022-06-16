import { StorageService } from './services/storage.service';

import { Router, NavigationEnd } from '@angular/router';
import { Component } from '@angular/core';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'gameet-dashboard';
  currentUrl = this.router.url;

  constructor(private router: Router, private storage: StorageService) {}

  ngOnInit(): void {
    if (this.storage.getToken() != null) {
      this.router.navigate(['/dashboard/commerce']);
    } else {
      this.router.navigate(['/login']);
    }
  }
}

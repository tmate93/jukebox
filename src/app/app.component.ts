import { Component } from '@angular/core';
import {AuthService} from "./core/services/auth-service/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'login';

  constructor(public authService: AuthService) {
  }

  logout(): void {
    this.authService.logout();
  }
}

import { Component } from '@angular/core';
import { AuthService } from "../../../../core/services/auth-service/auth.service";
import { User } from "../../../../core/models/user/user.model";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public currentUser: User | null;

  constructor(private authService: AuthService) {
    this.currentUser = authService.currentUser;
  }
}

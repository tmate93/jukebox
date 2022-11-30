import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from "../auth-service/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService) {}

  canActivate(): boolean {
    return !!this.authService.currentUser;
  }

}

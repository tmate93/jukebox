import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from "../../../core/services/auth-service/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  constructor( private authService: AuthService) {
  }

  loginUser(): void{
    if (!this.loginForm.valid) {
      return;
    }
    const loginEmail = this.loginForm.value.email;
    const loginPassword = this.loginForm.value.password;

    this.authService.login(loginEmail, loginPassword);
  }


}

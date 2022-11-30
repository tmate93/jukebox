import { Component } from '@angular/core';
import { User } from "../../../core/models/user/user.model";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from "../../../core/models/custom-validator/custom-validator";
import { AuthService } from "../../../core/services/auth-service/auth.service";


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

  registerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      passwordConfirm: new FormControl('', [Validators.required]),
      kredit: new FormControl(0)
    },
    { validators: CustomValidators.passwordsMatching }
  );

  constructor( private authService: AuthService) {
  }

  registerUser(): void {
    if (!this.registerForm.valid) {
      return;
    }
    const user = this.registerForm.getRawValue() as User;
    this.authService.register(user);
  }

}

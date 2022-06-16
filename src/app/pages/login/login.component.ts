import { StorageService } from './../../services/storage.service';
import { AuthLoginDto } from './../../models/auth_dto';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginDto = new AuthLoginDto();

  constructor(
    private authService: AuthService,
    private storage: StorageService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  doLogin() {
    this.authService.login(this.loginDto).subscribe((loginResult) => {
      this.storage.setToken(loginResult.token);
      this.router.navigate(['/dashboard/commerce']);
    });
  }

  email = new FormControl('', [Validators.required, Validators.email]);

  correo: string = '';
  passw: string = '';

  //password
  hide: boolean = true;

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
}

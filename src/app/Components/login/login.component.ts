import { Component, Inject, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../../Services/Login/login.service';
import { Observer } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  router = inject(Router);
  fb = inject(FormBuilder)
  loginService = inject(LoginService)

  loginForm = this.fb.group ({
    username: ['', Validators.required],
    password: ['', Validators.required]
  })

  observer: Observer<any> = {
    next: (res: any) => {
      console.log(res.username)
      this.router.navigate(['/'])
    },
    error: (err) => {
      console.error(err.error.message)
    },
    complete: () => {
      console.log("Terminou a requisição")
    }
  }

  logar() {
    this.loginService.login(
      this.loginForm.controls.username.value!, 
      this.loginForm.controls.password.value!
    ).subscribe(this.observer);
  }
}

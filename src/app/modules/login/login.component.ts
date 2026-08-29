import { AuthService } from '../../service/auth/auth.service';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})

export class LoginComponent {
  private authService = inject(AuthService);


  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  onSubmit() {
        const email = this.loginForm.get('email')?.value;
        const password = this.loginForm.get('password')?.value;

        this.authService.login( String(email), String(password)).subscribe({
          next: (response) => {
            console.log('Login successful', response);
          },
          error: (error) => {
            console.error('Login failed', error);
          }
        });

  }
}

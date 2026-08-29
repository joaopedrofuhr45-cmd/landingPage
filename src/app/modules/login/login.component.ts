import { AuthService } from '../../service/auth/auth.service';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  private authService = inject(AuthService);
  private fb = inject(FormBuilder);

  isLoading = false;

  loginForm = this.fb.group({
    email: [''],
    password: [''],
  });

  onSubmit() {
    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;

    this.isLoading = true;

    this.authService.login(String(email), String(password)).subscribe({
      next: (response) => {
        this.isLoading = false;
        console.log('Login successful', response);
      },
      error: (error) => {
        this.isLoading = false;
        console.error('Login failed', error);
      }
    });
  }
}
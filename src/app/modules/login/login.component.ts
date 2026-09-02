import { AuthService } from '../../service/auth/auth.service';
import { AuthStateService } from '../../service/auth/auth-state/auth-state.service';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  private authService = inject(AuthService);
  private authState = inject(AuthStateService);
  private fb = inject(FormBuilder);
  private router = inject(Router);

  isLoading = false;
  errorMessage: string | null = null;

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  onSubmit() {
    if (this.loginForm.invalid) {
      this.errorMessage = 'Preencha email e senha corretamente';
      return;
    }

    this.errorMessage = null;
    this.isLoading = true;

    const { email, password } = this.loginForm.value;

    this.authService.login({ email: email!, password: password! }).subscribe({
      next: () => {
        this.isLoading = false;
        this.authState.setLoggedIn(true);
        this.router.navigate(['/home']);
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage = error.status === 401
          ? 'Email ou senha inválidos'
          : 'Erro ao fazer login, tente novamente';
      }
    });
  }
}

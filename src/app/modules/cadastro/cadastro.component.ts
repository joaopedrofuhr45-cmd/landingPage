import { Component } from '@angular/core';
import { inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { CadastroService } from '../../service/cadastro/cadastro.service';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css',
})
export class CadastroComponent {
  private cadastroService = inject(CadastroService);
  private fb = inject(FormBuilder);

  isLoading = false;

  registerForm = this.fb.group({
    name: [''],
    email: [''],
    password: [''],
    passwordConfirmation: [''],
  });

  onSubmit() {
    const name = this.registerForm.get('name')?.value;
    const email = this.registerForm.get('email')?.value;
    const password = this.registerForm.get('password')?.value;
    const passwordConfirmation = this.registerForm.get(
      'passwordConfirmation',
    )?.value;

    this.isLoading = true;

    this.cadastroService
      .cadastro(
        String(name),
        String(email),
        String(password),
        String(passwordConfirmation),
      )
      .subscribe({
        next: (response) => {
          console.log('Cadastro successful', response);
          this.isLoading = false;
        },
        error: (error) => {
          console.error('Cadastro failed', error);
          this.isLoading = false;
        },
      });
  }
}

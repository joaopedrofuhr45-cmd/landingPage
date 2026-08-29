import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { CadastroService } from '../../service/cadastro/cadastro.service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

function senhasIguaisValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const senha = control.get('password')?.value;
    const confirmacao = control.get('passwordConfirmation')?.value;
    return senha === confirmacao ? null : { senhasDiferentes: true };
  };
}

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, CommonModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css',
})
export class CadastroComponent {
  private cadastroService = inject(CadastroService);
  private fb = inject(FormBuilder);
  private router = inject(Router);

  isLoading = false;
  errorMessage: string | null = null;

  registerForm = this.fb.group(
    {
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      passwordConfirmation: ['', Validators.required],
    },
    { validators: senhasIguaisValidator() }
  );

  onSubmit() {
    if (this.registerForm.invalid) {
      this.errorMessage = this.registerForm.errors?.['senhasDiferentes']
        ? 'As senhas não coincidem'
        : 'Preencha todos os campos corretamente';
      return;
    }

    this.errorMessage = null;
    this.isLoading = true;

    const { name, email, password, passwordConfirmation } = this.registerForm.value;

    this.cadastroService
      .cadastro(name!, email!, password!, passwordConfirmation!)
      .subscribe({
        next: () => {
          this.isLoading = false;
          this.router.navigate(['/login']);
        },
        error: (error) => {
          this.isLoading = false;
          this.errorMessage = error.status === 409
            ? 'Esse email já está em uso'
            : 'Erro ao cadastrar, tente novamente';
        },
      });
  }
}
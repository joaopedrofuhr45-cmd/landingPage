import { Component } from '@angular/core';
import {  inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CadastroService } from '../../service/cadastro/cadastro.service';
@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
private cadastroService = inject(CadastroService);
 registerForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    passwordConfirmation: new FormControl(''),
  });

  onSubmit() {
    const name = this.registerForm.get('name')?.value;
    const email = this.registerForm.get('email')?.value;
    const password = this.registerForm.get('password')?.value;
    const passwordConfirmation = this.registerForm.get('passwordConfirmation')?.value;  

    this.cadastroService.cadastro(String(name), String(email), String(password), String(passwordConfirmation)).subscribe({
      next: (response) => {
        console.log('Cadastro successful', response);
      },
      error: (error) => {
        console.error('Cadastro failed', error);
      }
    });
  }

}

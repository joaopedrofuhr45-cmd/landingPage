import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CadastroService {
  private apiUrl = 'http://localhost:8080/api'; // Replace with your API URL
  constructor(private http: HttpClient) {}

  cadastro(
    name: string,
    email: string,
    password: string,
    passwordConfirmation: string,
  ) {
    return this.http.post(`${this.apiUrl}/cadastro`, {
      name,
      email,
      password,
      passwordConfirmation,
    });
  }
}

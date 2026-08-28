import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8080/api'; // Replace with your API URL
  constructor(private http: HttpClient) {}


  login(email: string, password: string) {
  return this.http.post(`${this.apiUrl}/login`, { email, password });
  }
}

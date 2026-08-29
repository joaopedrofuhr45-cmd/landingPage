import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginRequest, MeResponse } from '../../models/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  login(credentials: LoginRequest): Observable<void> {
    return this.http.post<void>(
      `${this.apiUrl}/login`,
      credentials,
      { withCredentials: true }
    );
  }

  logout(): Observable<void> {
    return this.http.post<void>(
      `${this.apiUrl}/logout`,
      {},
      { withCredentials: true }
    );
  }


   me(): Observable<MeResponse> {
    return this.http.get<MeResponse>(`${this.apiUrl}/me`, { withCredentials: true });
  }
}
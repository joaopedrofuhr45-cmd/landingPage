import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthStateService {
  private loggedIn = signal(false);

  isLoggedIn = this.loggedIn.asReadonly();

  setLoggedIn(status: boolean): void {
    this.loggedIn.set(status);
  }
}
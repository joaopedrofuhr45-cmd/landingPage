import { AuthStateService } from './service/auth/auth-state/auth-state.service';
import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './service/auth/auth.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'landingPage';

  private authService = inject(AuthService);
  private authState = inject(AuthStateService);

  ngOnInit(): void {
    this.authService.me().subscribe({
      next: () => this.authState.setLoggedIn(true),
      error: () => this.authState.setLoggedIn(false)
    });
  }
}
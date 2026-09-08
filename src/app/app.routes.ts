import { Routes } from '@angular/router';
import { InicioComponent } from './modules/inicio/inicio.component';
import { LoginComponent } from './modules/login/login.component';
import { CadastroComponent } from './modules/cadastro/cadastro.component';
import { HomeComponent } from './modules/home/home.component';
import { authGuard } from './guards/auth.guard';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { PublicLayoutComponent } from './layouts/public-layout/public-layout.component';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  {
    path: '',
    component: PublicLayoutComponent,
    children: [{ path: 'inicio', component: InicioComponent }],
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'cadastro', component: CadastroComponent },
    ],
  },
  { path: 'home', component: HomeComponent, canActivate: [authGuard] },
];

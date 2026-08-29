import { Routes } from '@angular/router';
import { InicioComponent } from './modules/inicio/inicio.component';
import { LoginComponent } from './modules/login/login.component';
import { CadastroComponent } from './modules/cadastro/cadastro.component';
import { HomeComponent } from './modules/home/home.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    { path: '', redirectTo: 'inicio', pathMatch: 'full' },
    { path: 'inicio', component: InicioComponent },
    { path: 'login', component: LoginComponent},
    {path: 'cadastro', component: CadastroComponent},
    {path: "home", component: HomeComponent, canActivate: [authGuard]}
];

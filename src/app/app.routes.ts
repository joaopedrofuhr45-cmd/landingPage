import { Routes } from '@angular/router';
import { InicioComponent } from './modules/inicio/inicio.component';
import { LoginComponent } from './modules/login/login.component';

export const routes: Routes = [
    { path: '', redirectTo: 'inicio', pathMatch: 'full' },
    { path: 'inicio', component: InicioComponent },
    { path: 'login', component: LoginComponent}
];

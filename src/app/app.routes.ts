import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StagiairesComponent } from './components/stagiaires/stagiaires.component';
import { LoginComponent } from './components/auth/login/login.component';

export const appRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'stagiaires', component: StagiairesComponent },
  { path: 'login', component: LoginComponent }
];

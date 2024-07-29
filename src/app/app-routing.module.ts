import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/auth/login/login.component';
import { InternListComponent } from './components/interns/intern-list/intern-list.component';
import { InternDetailComponent } from './components/interns/intern-detail/intern-detail.component';
import { InternFormComponent } from './components/interns/intern-form/intern-form.component';
import { UserListComponent } from './components/users/user-list/user-list.component';
import { UserDetailComponent } from './components/users/user-detail/user-detail.component';
import { UserFormComponent } from './components/users/user-form/user-form.component';
import { RoleListComponent } from './components/roles/role-list/role-list.component';
import { RoleDetailComponent } from './components/roles/role-detail/role-detail.component';
import { RoleFormComponent } from './components/roles/role-form/role-form.component';
import { StagiairesComponent } from './components/stagiaires/stagiaires.component'; // Import the new component

const routes: Routes = [ 
  { path: 'stagiaires', component: StagiairesComponent }, // Add the route for stagiaire
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'interns', component: InternListComponent },
  { path: 'interns/new', component: InternFormComponent },
  { path: 'interns/:id', component: InternDetailComponent },
  { path: 'users', component: UserListComponent },
  { path: 'users/new', component: UserFormComponent },
  { path: 'users/:id', component: UserDetailComponent },
  { path: 'roles', component: RoleListComponent },
  { path: 'roles/new', component: RoleFormComponent },
  { path: 'roles/:id', component: RoleDetailComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './shared/counter/counter.component';

import { BadgesComponent } from './pages/badges/badges/badges.component';
import { LoginComponent } from './pages/login/login.component';
import { UserCreateComponent } from "./pages/user-create/user-create.component";
import { UserEditComponent } from "./pages/user-edit/user-edit.component";
import { UsersComponent } from './pages/users/users/users.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'counter', canActivate: [AuthGuard], component: CounterComponent },
  { path: 'users', canActivate: [AuthGuard], component: UsersComponent },
  { path: 'badges', canActivate: [AuthGuard], component: BadgesComponent },
  { path: 'user-create', canActivate: [AuthGuard], component: UserCreateComponent },
  { path: 'user-edit/:userId', canActivate: [AuthGuard], component: UserEditComponent },
  { path: '**', redirectTo: 'login' }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }

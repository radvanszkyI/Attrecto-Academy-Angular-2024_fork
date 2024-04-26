import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './shared/counter/counter.component';

import { BadgeCreateComponent } from './pages/badge-create/badge-create.component';
import { BadgeEditComponent } from './pages/badge-edit/badge-edit.component';
import { BadgesComponent } from './pages/badges/badges/badges.component';
import { UserCreateComponent } from "./pages/user-create/user-create.component";
import { UserEditComponent } from "./pages/user-edit/user-edit.component";
import { UsersComponent } from './pages/users/users/users.component';

const routes: Routes = [
  { path: 'counter', component: CounterComponent },
  { path: 'users', component: UsersComponent },
  { path: 'badges', component: BadgesComponent },
  { path: 'user-create', component: UserCreateComponent },
  { path: 'user-edit/:userId', component: UserEditComponent },
  { path: 'badge-create', component: BadgeCreateComponent },
  { path: 'badge-edit/:badgeId', component: BadgeEditComponent },
  { path: '**', redirectTo: 'counter' }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }

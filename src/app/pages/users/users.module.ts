import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserCardComponent } from './components/user-card/user-card.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [UsersComponent, UserCardComponent],
  imports: [
    CommonModule
  ]
})
export class UsersModule { }

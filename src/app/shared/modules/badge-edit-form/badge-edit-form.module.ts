import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { UserEditFormModule } from '../user-edit-form/user-edit-form.module';
import { BadgeEditFormComponent } from './badge-edit-form.component';
import { IsControlRequiredPipe } from './pipes/is-control-required.pipe';



@NgModule({
  declarations: [BadgeEditFormComponent, IsControlRequiredPipe],
  exports: [
    BadgeEditFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UserEditFormModule
  ]
})
export class BadgeEditFormModule { }

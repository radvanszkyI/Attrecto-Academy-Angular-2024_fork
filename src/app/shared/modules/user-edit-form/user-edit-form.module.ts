import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { IsControlRequiredPipe } from './pipes/is-control-required.pipe';
import { UserEditFormComponent } from "./user-edit-form.component";



@NgModule({
  declarations: [UserEditFormComponent, IsControlRequiredPipe],
  exports: [
    UserEditFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class UserEditFormModule { }

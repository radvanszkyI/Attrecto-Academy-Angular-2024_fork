import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { IsControlRequiredPipe } from "./pipes/is-control-required.pipe";
import { BadgeEditFormComponent } from './badge-edit-form.component';



@NgModule({
  declarations: [BadgeEditFormComponent, IsControlRequiredPipe],
  exports: [
    BadgeEditFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class BadgeEditFormModule { }

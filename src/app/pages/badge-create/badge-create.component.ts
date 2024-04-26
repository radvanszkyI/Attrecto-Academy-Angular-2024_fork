import { Component } from '@angular/core';
import { BadgeEditFormModule } from "../../shared/modules/badge-edit-form/badge-edit-form.module";

@Component({
  selector: 'app-badge-create',
  standalone: true,
  templateUrl: './badge-create.component.html',
  styleUrl: './badge-create.component.scss',
  imports: [BadgeEditFormModule]
})
export class BadgeCreateComponent {

}

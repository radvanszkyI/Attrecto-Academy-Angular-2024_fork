import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { BadgeService } from 'src/app/pages/badges/badges/Services/badge.service';
import { Badge } from 'src/app/pages/badges/classes/Badge';

@Component({
  selector: 'app-badge-edit-form',
  templateUrl: './badge-edit-form.component.html',
  styleUrl: './badge-edit-form.component.scss'
})
export class BadgeEditFormComponent implements OnInit {
  @Input() badge: Badge

  badgeCrateForm: FormGroup

  constructor(private badgeService: BadgeService, private router: Router) {

  }

  ngOnInit(): void {
    this.initForm()
  }

  initForm() {
    this.badgeCrateForm = new FormGroup({
      //létrehozunk egy FormControl-t (controlNeve, validátorTömb)
      //  ha már van badge(only edit) -> name atr= a neve KÜLÖNBEN üres
      name: new FormControl(this.badge ? this.badge.name : '', [Validators.required, Validators.minLength(3)],),
      image: new FormControl(this.badge ? this.badge.image : '', [Validators.required])
    })
  }

  saveForm() {
    const badgeFormData: Badge = this.badgeCrateForm.getRawValue()

    if (this.badge) {
      this.badgeService.updateBadge(this.badge.id, badgeFormData).subscribe({
        next: () => {//akor hivodik meg ha sikerült létrehozni a szerveroldalon
          this.router.navigate(['badges'])
        },
      })
    } else {
      this.badgeService.createBadge(badgeFormData).subscribe({
        next: () => {//akor hivodik meg ha sikerült létrehozni a szerveroldalon
          this.router.navigate(['badges'])
        },
      })
    }
  }

}

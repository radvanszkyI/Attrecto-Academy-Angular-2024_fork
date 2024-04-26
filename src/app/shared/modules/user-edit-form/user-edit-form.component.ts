import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { UserService } from 'src/app/pages/users/users/services/user.service';
import { User } from "../../../pages/users/classes/User";

@Component({
  selector: 'app-user-edit-form',
  templateUrl: './user-edit-form.component.html',
  styleUrl: './user-edit-form.component.scss'
})
export class UserEditFormComponent implements OnInit {
  @Input() user: User

  userCrateForm: FormGroup
  constructor(private userService: UserService, private router: Router) {

  }

  ngOnInit(): void {
    this.initForm()
  }

  initForm() {
    this.userCrateForm = new FormGroup({
      //létrehozunk egy FormControl-t (controlNeve, validátorTömb)
      //  ha már van user(only edit) -> name atr= a neve KÜLÖNBEN üres
      name: new FormControl(this.user ? this.user.name : '', [Validators.required, Validators.minLength(3)],),
      image: new FormControl(this.user ? this.user.image : '', [Validators.required]),
      badges: new FormControl(this.user ? this.user.badges : '', [Validators.required])
    })
  }

  saveForm() {
    const userFormData: User = this.userCrateForm.getRawValue()
    this.user.badges = this.userCrateForm.getRawValue().badges.split(",")
    this.user.id = userFormData.id
    this.user.name = userFormData.name
    this.user.image = userFormData.image

    if (this.user) {
      this.userService.updateUsers(this.user.id, this.user).subscribe({
        next: () => {//akor hivodik meg ha sikerült létrehozni a szerveroldalon
          this.router.navigate(['users'])
        },
      })
    } else {
      this.userService.createUser(this.user).subscribe({
        next: () => {//akor hivodik meg ha sikerült létrehozni a szerveroldalon
          this.router.navigate(['users'])
        },
      })
    }
  }

}

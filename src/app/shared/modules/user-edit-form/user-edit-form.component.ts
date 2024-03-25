import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../../pages/users/classes/User";
import { UserService } from 'src/app/pages/users/users/services/user.service';
import { Route, Router } from '@angular/router';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-user-edit-form',
  templateUrl: './user-edit-form.component.html',
  styleUrl: './user-edit-form.component.scss'
})
export class UserEditFormComponent implements OnInit{
  @Input() user:User

  userCrateForm: FormGroup

  constructor(private userService:UserService,private router:Router){

  }

  ngOnInit(): void {
    this.initForm()
  }

  initForm() {
    this.userCrateForm = new FormGroup({
      //létrehozunk egy FormControl-t (controlNeve, validátorTömb)
      //  ha már van user(only edit) -> name atr= a neve KÜLÖNBEN üres
      name: new FormControl(this.user ? this.user.name :'', [Validators.required, Validators.minLength(3)],),
      image: new FormControl(this.user ? this.user.image : '',[Validators.required])
    })
  }

  saveForm(){
    const userFormData: User=this.userCrateForm.getRawValue()

    if(this.user){
      this.userService.updateUsers(this.user.id,userFormData).subscribe({
        next:() => {//akor hivodik meg ha sikerült létrehozni a szerveroldalon
            this.router.navigate(['users'])
        },
      })
    }else{
      this.userService.createUser(userFormData).subscribe({
        next:() => {//akor hivodik meg ha sikerült létrehozni a szerveroldalon
            this.router.navigate(['users'])
        },
      })
    }
  }

}

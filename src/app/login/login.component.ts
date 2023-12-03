import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  @ViewChild('f') loginForm!: NgForm

  constructor(private router: Router, private userService: UserService){}

  users = [
    {
      username: 'joeffrey',
      password: '1234',
      position: 'admin'
    },
    {
      username: 'jabez',
      password: '1234',
      position: 'writer'
    },
    {
      username: 'kyle',
      password: '1234',
      position: 'reader'
    },

  ]

  onSubmit(){
    if(this.loginForm.valid){
      this.users.forEach(user => {
        if(this.loginForm.value.username === user.username && this.loginForm.value.password === user.password){
          this.userService.changeUserPosition(user.position)
          this.router.navigate([`${user.position}`])
        }
        
      })
    }
  }
}

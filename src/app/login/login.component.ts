import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { AuthService } from '../shared/auth.service';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  @ViewChild('f') loginForm!: NgForm;

  constructor(
    private router: Router,
    private userService: UserService,
    private authService: AuthService
  ) {}

  onSubmit() {
    let credentials = {
      username: this.loginForm.value.username,
      password: this.loginForm.value.password,
    };
    this.authService.login(credentials).subscribe((res) => {
      if (res.data === undefined) {
        return;
      }
      // set user_id to localstorage for writer id
      localStorage.setItem('writer_id', res.data.user_id);
      this.setSession(res);
      this.userService.changeUserPosition(res.data.role_name);
      alert('Login successful!');
      this.router.navigate([`${res.data.role_name}`]);
    });
  }

  private setSession(authResult: { expiresIn: any; token: string }) {
    const expiresAt = moment().add(authResult.expiresIn, 'second');

    localStorage.setItem('id_token', authResult.token);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
  }
  // onSubmit(){
  //   if(this.loginForm.valid){
  //     this.users.forEach(user => {
  //       if(this.loginForm.value.username === user.username && this.loginForm.value.password === user.password){
  //         this.userService.changeUserPosition(user.position)
  //         this.router.navigate([`${user.position}`])
  //       }

  //     })
  //   }
  // }
}

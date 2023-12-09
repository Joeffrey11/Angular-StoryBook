import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../shared/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  user!: FormGroup;
  roles!: any;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private _router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.getRoles();
    this.user = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirm_password: ['', Validators.required],
      role_id: [1, Validators.required],
    });
  }

  register() {
    let userData = this.user.getRawValue();
    if (this.user.valid === false || this.comparePassword() === false) {
      alert('Please provide all necessary details');
      return;
    }
    this.apiService.postWriter(userData).subscribe({
      next: (res: any) => {
        alert(
          'You have successfully registered, you may now login using your credentials'
        );
        this._router.navigateByUrl('/login');
      },
      error: (err: any) => {
        console.error(err);
        alert('Something Went Wrong');
      },
    });
  }

  getRoles() {
    this.apiService.getRoles().subscribe((res) => {
      this.roles = res.filter((r: { role_id: number }) => r.role_id !== 3);
    });
  }

  verifyUserName() {
    let username = this.user.value.username;
    this.authService.checkUsername(username).subscribe((res) => {
      if (res !== undefined) {
        alert('Username already exists!');
        this.user.get('username')?.reset();
      }
    });
  }

  comparePassword() {
    if (this.user.value.password !== this.user.value.confirm_password) {
      alert('Password mismatch!');
      return false;
    }
    return true;
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WriterModel } from './user-management.model';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss'],
})
export class UserManagementComponent implements OnInit {
  showAdd!: boolean;
  showUpdate!: boolean;
  formValue!: FormGroup;
  writerModelObj: WriterModel = new WriterModel();
  writerData!: any;
  roleData!: any;
  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      id: [0],
      username: ['', Validators.required],
      password: ['', Validators.required],
      role_id: ['', Validators.required],
    });
    this.getAllWriter();
    this.getRoles();
  }

  clickAddWriter() {
    this.showAdd = true;
    this.showUpdate = false;
    this.formValue.reset();
    this.formValue.setValue({ role_id: 1 });
  }

  getRoles() {
    this.apiService.getRoles().subscribe((res) => {
      this.roleData = res;
    });
  }

  close() {
    let button_element: HTMLElement = document.getElementById(
      'writerButton'
    ) as HTMLElement;
    button_element.dataset['type'] = 'new';
    let modal_element: HTMLElement = document.getElementById(
      'writerButton'
    ) as HTMLElement;
    modal_element.dataset['type'] = 'new';
  }

  postWriterDetails() {
    this.writerModelObj.firstName = this.formValue.value.firstName;
    this.writerModelObj.lastName = this.formValue.value.lastName;
    this.writerModelObj.email = this.formValue.value.email;
    this.writerModelObj.username = this.formValue.value.username;
    this.writerModelObj.password = this.formValue.value.password;
    this.writerModelObj.role_id = this.formValue.value.role_id;
    this.apiService.postWriter(this.writerModelObj).subscribe({
      next: (res: any) => {
        alert('Writer Added Successfully');
        let ref = document.getElementById('cancel');
        ref?.click();
        this.formValue.reset();
        this.getAllWriter();
      },
      error: (err: any) => {
        console.error(err);
        alert('Something Went Wrong');
      },
    });
  }

  UpdateWriterDetails() {
    this.writerModelObj.firstName = this.formValue.value.firstName;
    this.writerModelObj.lastName = this.formValue.value.lastName;
    this.writerModelObj.email = this.formValue.value.email;
    this.writerModelObj.id = this.formValue.value.id;
    this.writerModelObj.username = this.formValue.value.username;
    this.writerModelObj.password = this.formValue.value.password;
    this.writerModelObj.role_id = this.formValue.value.role_id;

    this.apiService
      .updateWriter(this.writerModelObj, this.writerModelObj.id)
      .subscribe((res) => {
        alert('Updated Successfully');
        let ref = document.getElementById('cancel');
        ref?.click();
        this.formValue.reset();
        this.getAllWriter();
      });
  }

  getAllWriter() {
    this.apiService.getWriters().subscribe((res) => {
      this.writerData = res;
    });
  }
  deleteWriter(writer: any) {
    this.apiService.deleteWriter(writer.user_id).subscribe({
      next: (res: any) => {
        alert('User Deleted!');
        this.getAllWriter();
      },
      error: (err: any) => {
        alert('Something went wrong');
      },
    });
  }

  getWriter(writer: any) {
    this.apiService.getWriter(writer.user_id).subscribe({
      next: (res: any) => {
        this.showAdd = false;
        this.showUpdate = true;
        this.formValue.setValue({
          firstName: res.first_name,
          lastName: res.last_name,
          email: res.email,
          username: res.username,
          password: res.password,
          id: res.user_id,
          role_id: res.role_id,
        });
      },
      error: (err: any) => {
        alert('Something went wrong');
      },
    });
  }
}

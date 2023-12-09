import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { CanActivate } from '@angular/router';
import * as moment from 'moment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, public router: Router) {}

  login(user: any) {
    return this.http.post<any>(`http://localhost:8085/api/auth`, user).pipe(
      map((res: any) => {
        if (res.status === true) {
          return res;
        }
        alert(res.message);
      })
    );
  }

  public isLoggedIn() {
    return this.getExpiration();
  }

  isLoggedOut() {
    return this.isLoggedIn() ? true : false;
  }

  getExpiration() {
    return localStorage.getItem('expires_at');
  }

  checkUsername(username: string) {
    return this.http
      .get<any>(`http://localhost:8085/api/user/check/${username}`)
      .pipe(
        map((res: any) => {
          if (res.status === true) {
            return res.data;
          }
          alert(res.message);
        })
      );
  }
}

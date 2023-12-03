import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  postWriter(data: any) {
    return this.http.post<any>("http://localhost:8085/api/user", data)
      .pipe(map((res: any) => {
        if(res.status === true) {
          return res.data;
        }
        alert(res.message);
      }));
  }

  getWriters() {
    return this.http.get<any>("http://localhost:8085/api/user")
      .pipe(map((res: any) => {
        if(res.status === true) {
          return res.data;
        }
        alert(res.message);
      }));
  }

  getRoles() {
    return this.http.get<any>("http://localhost:8085/api/role")
      .pipe(map((res: any) => {
        if(res.status === true) {
          return res.data;
        }
        alert(res.message);
      }));
  }


  getWriter(id: number) {
    return this.http.get<any>(`http://localhost:8085/api/user/${id}`)
      .pipe(map((res: any) => {
        if(res.status === true) {
          return res.data;
        }
        alert(res.message);
      }));
  }

  updateWriter(data: any, id: number) {
    return this.http.put<any>(`http://localhost:8085/api/user/${id}`, data)
      .pipe(map((res: any) => {
        if(res.status === true) {
          return res.data;
        }
        alert(res.message);
      }));
  }

  deleteWriter(id: number) {
    return this.http.delete<any>(`http://localhost:8085/api/user/${id}`)
      .pipe(map((res: any) => {
        alert(res.message);
      }));
  }
}

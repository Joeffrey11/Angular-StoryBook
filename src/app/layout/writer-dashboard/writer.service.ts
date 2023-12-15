import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, catchError, throwError } from 'rxjs';

export interface Book {
  book_id?: string | number;
  writer_id?: string | number;
  writer_name: string;
  name: string;
  genre: string;
  url: string;
  description: string;
  body: string;
}

@Injectable({
  providedIn: 'root',
})
export class WriterService {
  private baseUrl = 'http://localhost:8085/api';
  constructor(private http: HttpClient) {}
  public selectedId = new Subject<any>();

  setData(id: any) {
    this.selectedId.next(id);
  }
  getData() {
    return this.selectedId.asObservable();
  }

  addBook(data: any, writer_id: any, img_url: any): Observable<any> {
    return this.http
      .post<Book>(this.baseUrl + '/book', {
        writer_id: writer_id,
        writer_name: data.writer_name,
        name: data.name,
        genre: data.genre,
        url: img_url,
        description: data.description,
        body: data.body,
      })
      .pipe(catchError(this.handleError));
  }

  getAllBooks(): Observable<any> {
    return this.http
      .get<Book[]>(this.baseUrl + '/book')
      .pipe(catchError(this.handleError));
  }

  deleteBook(id: number): Observable<any> {
    return this.http
      .delete<Book[]>(this.baseUrl + `/book/${id}`)
      .pipe(catchError(this.handleError));
  }

  getOneBookById(id: number): Observable<any> {
    return this.http
      .get<Book>(this.baseUrl + `/book/${id}`)
      .pipe(catchError(this.handleError));
  }

  updateBook(data: any, img_url: any, id: number): Observable<any> {
    return this.http
      .put<Book>(this.baseUrl + `/book/${id}`, {
        writer_name: data.writer_name,
        name: data.name,
        genre: data.genre,
        url: img_url,
        description: data.description,
        body: data.body,
      })
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }
}

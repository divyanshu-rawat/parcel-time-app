import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { postOffice } from '../../Interfaces/postOffice';

@Injectable({
  providedIn: 'root'
})
export class PostOfficeService {
  private readonly apiurl = 'http://localhost:3000/office/';
  private headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  private httpOptions = {
    headers: this.headers
  };

  constructor(private http: HttpClient) { }      //Injecting HTTP service to communicate with the  rest-api.

  getPostOffices(): Observable<postOffice[]> {
    return this.http.get<postOffice[]>(this.apiurl + 'list').pipe(
      tap(data => data),
      catchError(this.handleError)
    );
  }

  deletePostOffice(id): Observable<postOffice[]> {
    return this.http.post<postOffice[]>(this.apiurl + 'delete/' + id, this.httpOptions).pipe(
      tap(data => data),
      catchError(this.handleError)
    );
  }

  addPostOffice(result): Observable<postOffice[]> {
    return this.http.post<postOffice[]>(this.apiurl + 'add/', result, this.httpOptions).pipe(
      tap(data => data),
      catchError(this.handleError)
    );
  }

  updatePostOffice(id, result): Observable<postOffice[]> {
    return this.http.post<postOffice[]>(this.apiurl + 'update/' + id, result, this.httpOptions).pipe(
      tap(data => data),
      catchError(this.handleError)
    );
  }


  private handleError(error: any) {
    console.error(error);
    return throwError(error);
  }
}

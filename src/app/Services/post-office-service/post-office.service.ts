import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { postOffice } from '../../Interfaces/postOffice';

@Injectable({
  providedIn: 'root'
})
export class PostOfficeService {
  private apiurl = 'http://localhost:3000/office/';
  private headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  private httpOptions = {
    headers: this.headers
  };

  constructor(private http: HttpClient) { } // Dependency Injection of HttpClient to perform CRUD operations of rest-api endpoints.

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
    return this.http.post<postOffice[]>(this.apiurl + 'add/', result, this.httpOptions ).pipe(
      tap(data => data),
      catchError(this.handleError)
    );
  }

  // Function to handle errors in case any occurs.
  private handleError(error: any) {
    console.error(error);
    return throwError(error);
  }

}

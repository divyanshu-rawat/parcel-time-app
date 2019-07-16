import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { shipment } from '../../Interfaces/shipment';

/**
 * Shipment Service
 * Service responsible for performing CRUD operations on rest-api endpoint.
 */

@Injectable({
  providedIn: 'root'
})
export class ShipmentService {

  private readonly apiurl = 'http://localhost:3000/shipment/';
  private headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  private httpOptions = {
    headers: this.headers
  };

  // injecting HttpClient module to communicate with back-end services.
  constructor(private http: HttpClient) { }

  // used to fetch data from api.
  getShipments(): Observable<shipment[]> {
    return this.http.get<shipment[]>(this.apiurl + 'list').pipe(
      tap(data => data),     // tap operator is an rxjs operator, used to log value emitted by observable.
      catchError(this.handleError)
    );
  }

  // used to perform delete operation on api.
  deleteShipment(id): Observable<shipment[]> {
    return this.http.post<any[]>(this.apiurl + 'delete/' + id, this.httpOptions).pipe(
      tap(data => data),
      catchError(this.handleError)
    );
  }

  // used to perform add operation on api.
  addShipment(result): Observable<shipment[]> {
    return this.http.post<any[]>(this.apiurl + 'add/', result, this.httpOptions).pipe(
      tap(data => data),
      catchError(this.handleError)
    );
  }

  // used to perform update operation on api.
  updateShipment(id, result): Observable<shipment[]> {
    return this.http.post<any[]>(this.apiurl + 'update/' + id, result, this.httpOptions).pipe(
      tap(data => data),
      catchError(this.handleError)
    );
  }

  // function to handleError if any occurs.
  private handleError(error: any) {
    return throwError(error);
  }


}

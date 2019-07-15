import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { shipment } from '../../Interfaces/shipment';

@Injectable({
  providedIn: 'root'
})
export class ShipmentService {

  private apiurl = 'http://localhost:3000/shipment/';
  private headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  private httpOptions = {
    headers: this.headers
  };

  constructor(private http: HttpClient) { }

  getShipments(): Observable<shipment[]> {
    return this.http.get<shipment[]>(this.apiurl + 'list').pipe(
      tap(data => data),
      catchError(this.handleError)
    );
  }

  deleteShipment(id): Observable<shipment[]> {
    return this.http.post<any[]>(this.apiurl + 'delete/' + id, this.httpOptions).pipe(
      tap(data => data),
      catchError(this.handleError)
    );
  }
  

  private handleError(error: any) {
    console.error(error);
    return throwError(error);
  }


}

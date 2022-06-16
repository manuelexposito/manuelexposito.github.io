import { Observable } from 'rxjs';
import { PropertyResponse } from './../models/property_dto';
import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const DEFAULT_HEADERS = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  }),
};

const COMMERCE_BASE_URL = 'property';

@Injectable({
  providedIn: 'root',
})
export class CommercesService {
  constructor(private http: HttpClient) {}

  fetchCommerces(page: number): Observable<PropertyResponse> {
    let requestUrl = `${environment.apiBaseUrl}/${COMMERCE_BASE_URL}?page=${page}`;

    return this.http.get<PropertyResponse>(requestUrl, DEFAULT_HEADERS);
  }
}

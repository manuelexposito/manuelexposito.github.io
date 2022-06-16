import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsersResponse } from '../models/interfaces/users_response';

const AUTH_BASE_URL = 'users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {}

  //TODO: Gestionar PAGINACIÓN
  fetchUsers() : Observable<UsersResponse> {

    let requestUrl = `${environment.apiBaseUrl}/${AUTH_BASE_URL}`

    return this.http.get<UsersResponse>(requestUrl);

  }

}

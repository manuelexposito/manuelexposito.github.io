import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { GameResponse } from './../models/movie_dto';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const GAME_BASE_URL = 'game';

const DEFAULT_HEADERS = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  }),
};

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  constructor(private http: HttpClient) {}

  fetchGames(page: number): Observable<GameResponse> {
    let requestUrl = `${environment.apiBaseUrl}/${GAME_BASE_URL}?page=${page}`;

    return this.http.get<GameResponse>(requestUrl, DEFAULT_HEADERS);
  }
}

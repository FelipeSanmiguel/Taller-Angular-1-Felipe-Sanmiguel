import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Serie } from './serie';

import { environment } from '../../environments/environment.development';

@Injectable({
    providedIn: 'root'
  })
export class SerieService {

    private apiUrl = environment.baseUrl;
    constructor(private http: HttpClient) { }

    getSeries(): Observable<Serie[]> {
        return this.http.get<Serie[]>(this.apiUrl);
      }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InternService {
  private baseUrl = 'http://localhost:8080/api/interns';

  constructor(private http: HttpClient) { }

  getAllInterns(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }
}

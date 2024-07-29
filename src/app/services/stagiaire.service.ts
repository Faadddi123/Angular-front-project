import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Stagiaire {
  id: number;
  cin: string;
  nom: string;
  prenom: string;
  email: string;
  tel: string;
  ecole: string;
  annee: string;
  domaine: string;
  statut: string;
}

@Injectable({
  providedIn: 'root'
})
export class StagiaireService {
  private apiUrl = 'http://localhost:8080/api/stagiaires'; // Update with your backend API URL

  constructor(private http: HttpClient) { }

  getStagiaires(): Observable<Stagiaire[]> {
    return this.http.get<Stagiaire[]>(this.apiUrl);
  }
}

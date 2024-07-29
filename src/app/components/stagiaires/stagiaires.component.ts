import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StagiaireService, Stagiaire } from '../../services/stagiaire.service';

@Component({
  selector: 'app-stagiaires',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './stagiaires.component.html',
  styleUrls: ['./stagiaires.component.css']
})
export class StagiairesComponent implements OnInit {
  stagiaires: Stagiaire[] = [];

  constructor(private stagiaireService: StagiaireService) { }

  ngOnInit(): void {
    this.stagiaireService.getStagiaires().subscribe(data => {
      this.stagiaires = data;
    });
  }
}

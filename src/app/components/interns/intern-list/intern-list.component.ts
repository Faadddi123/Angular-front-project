import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intern-list',
  templateUrl: './intern-list.component.html',
  styleUrls: ['./intern-list.component.css']
})
export class InternListComponent implements OnInit {
  interns = [
    { cin: 'CD254', nom: 'El Karati', prenom: 'Meryem', email: 'elkarati@gmail.com', tel: '0620552055', ecole: 'Ensias', annee: 'pfe', domaine: 'Genie Logiciel', statut: 'Validé - en cours' },
    { cin: 'BC324', nom: 'El Ades', prenom: 'Salma', email: 'elades@gmail.com', tel: '0444444444', ecole: 'Ensias', annee: 'pfe', domaine: 'KIST', statut: 'Saisi' },
    { cin: 'AB122', nom: 'El Fqaioul', prenom: 'Basma', email: 'elfqaioul@gmail.com', tel: '0730170747', ecole: 'INPT', annee: 'pfe', domaine: 'CL', statut: 'Saisi' },
    { cin: 'DE466', nom: 'El Hasseni', prenom: 'Zineb', email: 'elhasseni@gmail.com', tel: '0404040444', ecole: 'Ensias', annee: 'pfe', domaine: 'BDA', statut: 'Saisi' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  editIntern(intern: any) {
    // Implement edit logic here
  }

  deleteIntern(intern: any) {
    // Implement delete logic here
  }
}

import { Router, NavigationExtras } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import Projeto from 'src/app/models/projeto';

@Component({
  selector: 'app-card-projec-list',
  templateUrl: './card-projec-list.component.html',
  styleUrls: ['./card-projec-list.component.scss']
})
export class CardProjecListComponent implements OnInit {

  @Input() isNew = false;
  @Input() projectData: Projeto;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  doAction() {
    console.log('doAction called', this.projectData);
    const extras: NavigationExtras = {
      queryParams: { _id: this.projectData._id }
    };
    this.router.navigate(['/projects/details'], extras);

  }

  getSigla() {
    const nome = this.projectData.title;
    if (nome.split(' ').length > 1) {
      const firstName = nome.split(' ')[0];
      const lastName = nome.split(' ')[nome.split(' ').length - 1];
      return `${firstName.split('')[0]}${lastName.split('')[1]}`;
    } else {
      return `${nome.split('')[0]}${nome.split('')[1]}`;
    }
  }

}

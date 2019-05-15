import { ProjetosService } from './../../services/projetos.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import Projeto from 'src/app/models/projeto';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {

  project: Projeto;

  constructor(
    private routeActivate: ActivatedRoute,
    private projectServive: ProjetosService,
    private ngxSpinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.ngxSpinner.show();
    const id = this.routeActivate.snapshot.queryParams._id;
    debugger
    if (!id) {
      this.ngxSpinner.hide();
      return;
    }
    this.getProject(id);
  }

  getProject(id: string) {
    this.projectServive.getOne(id).subscribe((projeto) => {
      this.project = projeto;
      this.ngxSpinner.hide();
    }, (e) => {
      console.error(e);
      this.ngxSpinner.hide();
    });
  }

  getCreatedAtToDate(): string {
    const date: Date = new Date(this.project.createdAt);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  }

}

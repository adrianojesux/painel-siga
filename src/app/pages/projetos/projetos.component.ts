import { Component, OnInit } from '@angular/core';
import { ProjetosService } from 'src/app/services/projetos.service';
import Projeto from 'src/app/models/projeto';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.scss']
})
export class ProjetosComponent implements OnInit {

  listaProjetos: Projeto[] = [];

  constructor(
    private projectService: ProjetosService
  ) { }

  ngOnInit() {
    this.getListProjects();
  }

  getListProjects() {
    this.projectService.getAll()
      .subscribe((lista: Projeto[]) => {
        this.listaProjetos = lista;
      })
  }

}

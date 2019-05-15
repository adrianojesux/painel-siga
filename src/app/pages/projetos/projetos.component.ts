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
  listaProjetosSaved: Projeto[] = [];
  termSearch = '';

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
        this.listaProjetosSaved = lista;
        console.log('LISTA DE PROJETOS --> ', this.listaProjetos);
      });
  }

  submitSearch($event) {
    console.log('SEARCH ==>', event, this.termSearch);
    if (this.termSearch.trim() === '') {
      this.listaProjetos = this.listaProjetosSaved;
      return;
    }
    this.listaProjetos = this.listaProjetosSaved.filter((p) => p.title.toLowerCase().startsWith(this.termSearch.toLowerCase()));
  }

  onAddNew() {
    console.log('onAddNew() called');
  }

}

import { ClientsService } from './../../services/clients.service';
import { Component, OnInit } from '@angular/core';
import Cliente from 'src/app/models/clients';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  listaClientes: Cliente[] = [];
  listaSaved: Cliente[] = [];
  termSearch = '';

  constructor(
    private clientService: ClientsService,
    private router: Router,
    private ngxSpinner: NgxSpinnerService
  ) {
  }

  ngOnInit() {
    this.getList();
  }

  submitSearch(form) {
    console.log(form);
    if (this.termSearch.trim() === '') {
      this.listaClientes = this.listaSaved;
      return;
    }
    this.listaClientes = this.listaClientes.filter((c) => c.name.toLowerCase().startsWith(this.termSearch.toLowerCase()) );
  }

  onAddNew() {
    this.router.navigate(['/clients/cadastro']);
  }

  getList() {
    this.ngxSpinner.show();
    this.clientService.getAll()
      .subscribe((lista: Cliente[]) => {
        this.listaClientes = lista;
        this.listaSaved = lista;
        console.log(lista);
        this.ngxSpinner.hide();
      });
  }



}

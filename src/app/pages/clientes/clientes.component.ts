import { ClientsService } from './../../services/clients.service';
import { Component, OnInit } from '@angular/core';
import Cliente from 'src/app/models/clients';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  listaClientes: Cliente[] = [];

  constructor(
    private clientService: ClientsService
  ) { 
  }

  ngOnInit() {
    this.getList();
  }

  submitSearch(form) {
    console.log(form);
  }

  getList() {
    this.clientService.getAll()
      .subscribe((lista: Cliente[]) => {
        this.listaClientes = lista;
        console.log(lista);
      });
  }



}

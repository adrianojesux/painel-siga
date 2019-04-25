import { ClientsService } from './../../services/clients.service';
import { Component, OnInit } from '@angular/core';
import Cliente from 'src/app/models/clients';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  listaClientes: Cliente[] = [];

  constructor(
    private clientService: ClientsService,
    private router: Router
  ) { 
  }

  ngOnInit() {
    this.getList();
  }

  submitSearch(form) {
    console.log(form);
  }

  onAddNew(){
    this.router.navigate(['/clients/cadastro']);
  }

  getList() {
    this.clientService.getAll()
      .subscribe((lista: Cliente[]) => {
        this.listaClientes = lista;
        console.log(lista);
      });
  }



}

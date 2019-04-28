import { Component, OnInit } from '@angular/core';
import Cliente from 'src/app/models/clients';

@Component({
  selector: 'app-clientes-cadastro',
  templateUrl: './clientes-cadastro.component.html',
  styleUrls: ['./clientes-cadastro.component.scss']
})
export class ClientesCadastroComponent implements OnInit {

  blockActive: number = 0;

  constructor() { }

  cliente: Cliente = new Cliente();

  ngOnInit() {
  }

  doSubmit(form){
    console.log(form)
  }

  activateBlock(b: number){
    this.blockActive = b;
  }

}

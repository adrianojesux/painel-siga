import { ClientsService } from './../../services/clients.service';
import { Component, OnInit } from '@angular/core';
import Cliente from 'src/app/models/clients';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes-cadastro',
  templateUrl: './clientes-cadastro.component.html',
  styleUrls: ['./clientes-cadastro.component.scss']
})
export class ClientesCadastroComponent implements OnInit {

  blockActive: number = 0;

  constructor(
    private clientsService: ClientsService,
    private router: Router
  ) { }

  cliente: Cliente = new Cliente();
  error: string = null;

  ngOnInit() {
  }

  doSubmit(form) {
    console.log(form);
    if (this.verifyCampos()) {
      const clienteSave = { ...this.cliente };
      clienteSave.cnpj = clienteSave.cnpj.replace(/[^0-9]+/g, '').trim();
      clienteSave.cepAdress = clienteSave.cepAdress.replace(/[^0-9]+/g, '').trim();
      clienteSave.phone = clienteSave.phone.replace(/[^0-9]+/g, '').trim();
      this.clientsService.createOne(clienteSave).subscribe((res) => {
        console.log('Succeso no cadastro', res);
        this.router.navigate(['/clients']);
      }, e => {
        console.error(e);
        this.error += `${e.error.error}.`;
        const container = document.querySelector('.content');
        container.scrollTo(0, 0);
      });
    } else {
      const container = document.querySelector('.content');
      container.scrollTo(0, 0);
    }
  }

  activateBlock(b: number) {
    this.blockActive = b;
  }

  buscaEndereco(event) {
    console.log(event);
    const cepStr = event.target.value.replace('-', '');
    if (cepStr.length !== 8) { return; }
    this.clientsService.buscaCep(cepStr).subscribe((res) => {
      console.log(res);
      this.cliente.city = res.city;
      this.cliente.street = res.street;
      this.cliente.neighborhood = res.neighborhood;
      this.cliente.state = res.state;
    }, (e) => {
      console.error(e);
    });
  }

  private verifyCampos(): boolean {
    this.error = '';
    if (!this.cliente.name) {
      this.error += '<br /> Nome não informado.';
    }
    if (!this.cliente.email) {
      this.error += '<br /> Email não informado.';
    }
    if (!this.cliente.cnpj) {
      this.error += '<br /> CNPJ não informado.';
    }
    if (!this.cliente.cepAdress || this.cliente.cepAdress.replace('-', '').length !== 8) {
      this.error += '<br /> CEP não informado.';
    }
    if (!this.cliente.phone) {
      this.error += '<br /> Telefone não informado.';
    }
    if (!this.cliente.password || !this.cliente.confirmPassword) {
      this.error += '<br /> Senha não informada.';
    } else if (this.cliente.password !== this.cliente.confirmPassword) {
      this.error += '<br /> As senhas informadas são diferentes.';
    }
    return !this.error;
  }

}

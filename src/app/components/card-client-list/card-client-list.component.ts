import Cliente from 'src/app/models/clients';
import { Router, NavigationExtras } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-client-list',
  templateUrl: './card-client-list.component.html',
  styleUrls: ['./card-client-list.component.scss']
})
export class CardClientListComponent implements OnInit {

  @Input() isNew: boolean = false;

  @Input() cliente: Cliente = new Cliente();

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  doGoClientDetails(cliente: Cliente) {
    // tslint:disable-next-line:no-unused-expression
    console.log('doAction called');
    const extras: NavigationExtras = {
      queryParams: { _id: cliente._id }
    };
    this.router.navigate(['/clients/details'], extras);

  }

  getSigla(){
    const nome = this.cliente.name;
    if(nome.split(' ').length > 1){
      const firstName = nome.split(' ')[0];
      const lastName = nome.split(' ')[nome.split(' ').length - 1];
      return `${firstName.split('')[0]}${lastName.split('')[1]}`;
    }else{
      return `${nome.split('')[0]}${nome.split('')[1]}`;
    }
  }
}

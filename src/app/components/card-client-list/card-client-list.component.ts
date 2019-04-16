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
}

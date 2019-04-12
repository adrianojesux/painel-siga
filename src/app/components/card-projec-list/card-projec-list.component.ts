import { Router, NavigationExtras } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-projec-list',
  templateUrl: './card-projec-list.component.html',
  styleUrls: ['./card-projec-list.component.scss']
})
export class CardProjecListComponent implements OnInit {

  @Input() isNew: boolean = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  doAction() {
    // tslint:disable-next-line:no-unused-expression
    console.log('doAction called');
    const extras: NavigationExtras = {
      queryParams: {_id: 'asdasd'}
    };
    this.router.navigate(['/projects/details'], extras);

  }

}

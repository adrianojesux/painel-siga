import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-lista-home',
  templateUrl: './card-lista-home.component.html',
  styleUrls: ['./card-lista-home.component.scss']
})
export class CardListaHomeComponent implements OnInit {

  @Input() isNew: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}

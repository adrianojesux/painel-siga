import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-clients-details',
  templateUrl: './clients-details.component.html',
  styleUrls: ['./clients-details.component.scss']
})
export class ClientsDetailsComponent implements OnInit {

  id: string;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.queryParams._id;
  }

}

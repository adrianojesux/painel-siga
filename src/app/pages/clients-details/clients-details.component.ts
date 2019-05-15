import { Component, OnInit } from '@angular/core';

import { ProjetosService } from 'src/app/services/projetos.service';
import { ClientsService } from './../../services/clients.service';
import { ActivatedRoute } from '@angular/router';
import { Chart } from 'chart.js';
import Projeto from 'src/app/models/projeto';
import Cliente from 'src/app/models/clients';

@Component({
  selector: 'app-clients-details',
  templateUrl: './clients-details.component.html',
  styleUrls: ['./clients-details.component.scss']
})
export class ClientsDetailsComponent implements OnInit {

  infografico = true;

  id: string;
  cliente: Cliente;
  projects: Projeto[] = [];
  chart1: any[];
  chart2: any[];
  chart3: any[];

  constructor(
    private route: ActivatedRoute,
    private clienteService: ClientsService,
    private projecService: ProjetosService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.queryParams._id;
    this.clienteService.getOne(id).subscribe((cliente) => {
      this.cliente = cliente;
      if (cliente) {
        this.projecService.getAllByClient(cliente._id).subscribe((projecsts) => {
          this.projects = projecsts;
          console.log(projecsts);
        });
      }
      this.loadCharts();
    });
  }

  getSigla(): string {
    const nome = this.cliente.name;
    if (nome.split(' ').length > 1) {
      const firstName = nome.split(' ')[0];
      const lastName = nome.split(' ')[nome.split(' ').length - 1];
      return `${firstName.split('')[0]}${lastName.split('')[1]}`;
    } else {
      return `${nome.split('')[0]}${nome.split('')[1]}`;
    }
  }

  getCreatedAtToDate(): string {
    const date: Date = new Date(this.cliente.createdAt);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  }

  changeView(val: boolean) {
    this.infografico = val;
  }

  onAddNew() {
    console.log('onAddNew() called');
  }

  loadCharts() {
    this.chart1 = new Chart('canvas', {
      type: 'line',
      data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
        datasets: [
          {
            label: 'Reservatorio 1',
            data: [1000, 190, 300, 500, 200, 300],
            borderColor: '#3cba9f',
            fill: false
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }],
        }
      }
    });

    this.chart2 = new Chart('doughnut', {
      type: 'doughnut',
      data: {
        labels: ['Em Andamento', 'Concluido', 'Cancelado'],
        datasets: [
          {
            label: 'Reservatorio 1',
            data: [1, 5, 3],
            borderColor: 'rgba(255, 99, 132, 0)',
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 206, 86)'
            ],
            fill: false
          }
        ]
      },
      options: {
        legend: {
          display: false
        }
      }
    });

    this.chart3 = new Chart('pie', {
      type: 'pie',
      data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
        datasets: [
          {
            label: 'Reservatorio 1',
            data: [1000, 190, 300, 500, 200, 300],
            borderColor: 'rgba(255, 99, 132, 0)',
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 206, 86)',
              'rgb(75, 192, 192)',
              'rgb(153, 102, 255)',
              'rgb(255, 159, 64)'
            ],
            fill: false
          }
        ]
      },
      options: {
        legend: {
          display: false
        }
      }
    });
  }

}

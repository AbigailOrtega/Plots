import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Label, Color, BaseChartDirective } from 'ng2-charts';
import { DataServiceService, DateChart } from 'src/app/services/data-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-linea',
  templateUrl: './linea.component.html',
  styleUrls: ['./linea.component.css']
})
export class LineaComponent implements OnInit {
  model: DateChart;
  public lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40, 90, 65, 59, 80, 81, 56, 55, 40, 90, 65, 59, 80, 81, 56, 55, 40, 90], label: 'Marcación 2226' },
    { data: [75, 79, 90, 91, 76, 85, 80, 80, 85, 89, 80, 81, 86, 85, 80, 80, 85, 89, 80, 81, 86, 85, 80, 80], label: 'Marcación 2227' }];

  public lineChartLabels: Label[] = ['1 am', '2 am', '3 am', '4 am', '5 am', '6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm',
    '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', '8 pm', '9 pm', '10 pm', '11 pm', '12 am'];
  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{}],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
        },
        {
          id: 'y-axis-1',
          position: 'right',
          gridLines: {
            color: 'rgba(255,0,0,0.3)',
          },
          ticks: {
            fontColor: 'red',
          }
        }
      ]
    },
    annotation: {
      annotations: [
        {
          type: 'line',
          mode: 'vertical',
          scaleID: 'x-axis-0',
          value: 'March',
          borderColor: 'orange',
          borderWidth: 2,
          label: {
            enabled: true,
            fontColor: 'orange',
            content: 'LineAnno'
          }
        },
      ],
    },
  };
  public lineChartColors: Color[] = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // red
      backgroundColor: 'rgba(255,0,0,0.3)',
      borderColor: 'red',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';

  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;

  constructor(private router:Router,public dataService: DataServiceService) { 
    if(!localStorage.getItem('token') && !localStorage.getItem('user')){
      this.router.navigate(['/login']);
    }
  }

  ngOnInit() {
  }

  public update(): void {
    console.log("dfasdfasfasfafasdf");
    let dateCh: DateChart = this.model;
    this.dataService.getDataHours(dateCh).subscribe(
      data => {
        let map26 = data[0];
        let map27 = data[1];
        let num26: number[];
        let num27: number[];
        let charData:ChartDataSets[];
        num26 = [map26['01'], map26['02'], map26['03'], map26['04'], map26['05'], map26['06'],
        map26['07'], map26['08'], map26['09'], map26['10'], map26['11'], map26['12'],
        map26['13'], map26['14'], map26['15'], map26['16'], map26['17'], map26['18'],
        map26['19'], map26['20'], map26['21'], map26['22'], map26['23'], map26['24']];
        num27 = [map27['01'], map27['02'], map27['03'], map27['04'], map27['05'], map27['06'],
        map27['07'], map27['08'], map27['09'], map27['10'], map27['11'], map27['12'],
        map27['13'], map27['14'], map27['15'], map27['16'], map27['17'], map27['18'],
        map27['19'], map27['20'], map27['21'], map27['22'], map27['23'], map27['24']];
        this.lineChartData =charData=[{data: num26, label: 'Marcación 2226'}, {data: num27, label: 'Marcación 2227'}] ; 
      },
      Error =>{
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        localStorage.removeItem('time');
        localStorage.removeItem('date');
        this.router.navigate(['/login']);
        return false;
      }
    );
    
    console.log(this.lineChartData);
    this.chart.update();
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }








}

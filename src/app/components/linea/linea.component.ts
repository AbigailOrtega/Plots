import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Label, Color, BaseChartDirective } from 'ng2-charts';
import { DataServiceService, DateChart } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-linea',
  templateUrl: './linea.component.html',
  styleUrls: ['./linea.component.css']
})
export class LineaComponent  implements OnInit{
  model;
  public lineChartData: ChartDataSets[]= [
  { data: [65, 59, 80, 81, 56, 55, 40,90,65, 59, 80, 81, 56, 55, 40,90,65, 59, 80, 81, 56, 55, 40,90], label: 'Marcación 2226' },
  {data: [75, 79, 90, 91, 76, 85, 80,80,85, 89, 80, 81, 86, 85, 80,80,85, 89, 80, 81, 86, 85, 80,80], label: 'Marcación 2227' }];

  public lineChartLabels: Label[] = ['1 am', '2 am', '3 am', '4 am', '5 am', '6 am', '7 am', '8 am', '9 am', '10 am','11 am', '12 pm',
                                   '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', '8 pm', '9 pm', '10 pm','11 pm', '12 am'];
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
  
    constructor(public dataService:DataServiceService) { }
  
    ngOnInit() {
    }
  
    public randomize(): void {
      let dateCh :DateChart={
        year:2000,
        month:1,
        day:23

      }
     this.lineChartData=this.dataService.getDataHours(dateCh);
      this.chart.update();
    }
  
    private generateNumber(i: number) {
      return Math.floor((Math.random() * (i < 2 ? 100 : 1000)) + 1);
    }
  
    // events
    public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
      console.log(event, active);
    }
  
    public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
      console.log(event, active);
    }
  
   
  
    
  
    
  
    
  }
  
import { Injectable } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { HttpClient } from '@angular/common/http';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private httpClient: HttpClient) { }


  getDataHours(request:DateChart){
    let day:string;
    let month:string;
    day=(request.day<10)?"0"+request.day:request.day.toString();
    month=(request.month<10)?"0"+request.month:request.month.toString();
    //let map26:any;
    //let map27:any;
   // let num26:number[];
    let charData:ChartDataSets[];

    return this.httpClient.get("http://localhost:8080/GraficaInformaRest/"+day+"-"+month+"-"+request.year);
  }
}

export interface DateChart{
  year:number;
  month:number;
  day:number;
}

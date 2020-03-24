import { Injectable } from '@angular/core';
import { ChartDataSets } from 'chart.js';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }


  getDataHours(request:DateChart){
   
   let num:number[]=[20,50,60,5,6,1,
    4,3,0,6,7,12,
    4,55,54,77,44,2,
    0,44,56,77,3,8];
    let num1:number[]=[30,60,70,6,7,10,
      5,4,1,7,8,22,
      40,75,74,47,64,23,
      6,45,57,87,30,6];
    let charData:ChartDataSets[]=[{data: num, label: 'Marcación 2226'},
                                  {data: num1, label: 'Marcación 2227'}] ; 
    return charData;
  }
}

export interface DateChart{
  year:number;
  month:number;
  day:number;
}
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoticiaHistoricoService {

  constructor() { }


  getHistoricoList(start:string, end: string){
    const historicoList :Historico[]=[{
      fecha: "2020-05-6",
      mensaje: "sajfñsdjfñdstring",
      tipo: "urgente aguascalientes"
    }
    ,
    {
      fecha: "2020-05-89",
      mensaje: "stafadsfdasfring",
      tipo: "asdfasdfadsfdsd"
    },{
      fecha: "2020-66-99",
      mensaje: "stasdfasdfasdfasdfsadfasdfasdfasdfasdfdsfdsfasfsssssssssssssssssssssssssssssssssssssssring",
      tipo: "naciaonal"
    }]
    return historicoList;
  }
  
  
}


export interface Historico{
  fecha: string,
  mensaje: string,
  tipo: string
}
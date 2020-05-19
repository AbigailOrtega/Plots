import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PATH } from '../pathVariable';

@Injectable({
  providedIn: 'root'
})
export class NoticiaHistoricoService {

  constructor(private httpClient: HttpClient) { }


  getHistoricoList(fechaInicio:string, fechaFin: string){
    
    return this.httpClient.get(PATH.BASE_API_URL+'/historicoNoticia/'+fechaInicio+'/'+fechaFin);
  }
  
  getSubscriptores() {
  
  return this.httpClient.get<Subscriptror[]>(PATH.BASE_API_URL+'/consultaSuscriptores');

  }
  
}

export interface Subscriptror{
  estado: string,
  suscriptores: string
}

export interface Historico{
  fecha: string,
  mensaje: string,
  tipo: string
}
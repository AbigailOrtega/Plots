import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PATH } from '../pathVariable';

@Injectable({
  providedIn: 'root'
})
export class NoticiaHistoricoService {

  constructor(private httpClient: HttpClient) { }
  options = {
    headers: new HttpHeaders({
      'Authorization': localStorage.getItem('token'),
      'Content-Type': 'application/json'
    })
  };

  getHistoricoList(fechaInicio:string, fechaFin: string){
    
    return this.httpClient.get(PATH.BASE_API_URL+'/historicoNoticia/'+fechaInicio+'/'+fechaFin, this.options);
  }
  
  getSubscriptores() {
  
  return this.httpClient.get<Subscriptror[]>(PATH.BASE_API_URL+'/consultaSuscriptores', this.options);

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
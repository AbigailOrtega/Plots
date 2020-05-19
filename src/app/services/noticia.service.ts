import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PATH } from '../pathVariable';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor(private httpClient: HttpClient) { }


  guardarNoticiaRegularNacional(mensaje:string){
    return this.httpClient.get(PATH.BASE_API_URL+'/guardarNoticiaRegular/'+mensaje);
  }

  guardarNoticiaRegularLocal(mensaje:string,estado:string){
    return this.httpClient.get(PATH.BASE_API_URL+'/guardarNoticiaRxEstado/'+mensaje+'/'+estado);
  }

  guardarNoticiaUrgenteNacional(mensaje:string){
    return this.httpClient.get(PATH.BASE_API_URL+'/guardarNoticiaUrgente/'+mensaje);
  }
guardarNotciaUrgenteLocal(mensaje:string,estado:string){
return this.httpClient.get(PATH.BASE_API_URL+'/guardarNoticiaUxEstado/'+mensaje+'/'+estado);
}
 
}

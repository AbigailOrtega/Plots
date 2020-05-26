import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PATH } from '../pathVariable';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor(private httpClient: HttpClient) { }
  options = {
    headers: new HttpHeaders({
      'Authorization': localStorage.getItem('token'),
      'Content-Type': 'application/json'
    })
  };

  guardarNoticiaRegularNacional(mensaje:string){
    return this.httpClient.get(PATH.BASE_API_URL+'/guardarNoticiaRegular/'+mensaje,this.options);
  }

  guardarNoticiaRegularLocal(mensaje:string,estado:string){
    return this.httpClient.get(PATH.BASE_API_URL+'/guardarNoticiaRxEstado/'+mensaje+'/'+estado,this.options);
  }

  guardarNoticiaUrgenteNacional(mensaje:string){
    return this.httpClient.get(PATH.BASE_API_URL+'/guardarNoticiaUrgente/'+mensaje,this.options);
  }
guardarNotciaUrgenteLocal(mensaje:string,estado:string){
return this.httpClient.get(PATH.BASE_API_URL+'/guardarNoticiaUxEstado/'+mensaje+'/'+estado,this.options);
}
 
}

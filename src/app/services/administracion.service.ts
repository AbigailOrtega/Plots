import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PATH } from '../pathVariable';

@Injectable({
  providedIn: 'root'
})
export class AdministracionService {

  constructor(private httpClient:HttpClient) { }
  options = {
    headers: new HttpHeaders({
      'Authorization': localStorage.getItem('token'),
      'Content-Type': 'application/json'
    })
  };
  crearUsuario(usuario:Object,contrasena:Object,telefono:Object,permisos:Object){
    
    return this.httpClient.get<string>(PATH.BASE_API_URL+'/registraUsuario/'+usuario+'&'+contrasena+'&'+telefono+'&'+permisos,this.options);
 
  }
}
export interface Permiso{
  name:string,
  valor:string
}
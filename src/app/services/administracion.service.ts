import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PATH } from '../pathVariable';

@Injectable({
  providedIn: 'root'
})
export class AdministracionService {

  constructor(private httpClient:HttpClient) { }

  crearUsuario(usuario:Object,contrasena:Object,telefono:Object,permisos:Object){
    
    return this.httpClient.get<string>(PATH.BASE_API_URL+'/registraUsuario/'+usuario+'&'+contrasena+'&'+telefono+'&'+permisos);
 
  }
}
export interface Permiso{
  name:string,
  valor:string
}
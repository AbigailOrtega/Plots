import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdministracionService {

  constructor() { }

  crearUsuario(object:Object){
    return true;
  }
}
export interface Permiso{
  name:string,
  valor:string
}
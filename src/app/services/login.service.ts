import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  checkUsuarioPassword(usuario:any){
    return true;
  }
  checkTokenSMSLogin(token:any){
return true;
  }
  recuperarPasswordXNumero(numero:any){
return true;
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PATH } from '../pathVariable';
import { RouterLink, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient:HttpClient, private router:Router) { }
  options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };

  checkUsuarioPasswordandToken(usuario:User){
  
 let object = '{ "idUsuario" : "", "username" : "' + usuario.userName + '", "password" : "'+usuario.password+
            '", "usuarioReg" : "", "clave": "'+usuario.token+'" , "telefono": "", "solicitud":"", "aviso":1 }';
    console.log("LOGGEANDO " + object);

   return this.httpClient.post<UserStorage>(PATH.BASE_API_URL + "/login", object, this.options);
   
  }
  sentTokenSMSLogin(numero:any){
    return  this.httpClient.get<Boolean>(PATH.BASE_API_URL+'/enviaClaveAcceso/'+numero,this.options);
  }

  recuperarPasswordXNumero(numero:any){
   return this.httpClient.get<string>(PATH.BASE_API_URL+'/olvidoPassword/'+numero,this.options);

  }
}

export interface User{
  userName:string;
  password:string;
  token:string;
}

export interface UserStorage{
  username:string;
  token:string;
  autorities:string[];
}
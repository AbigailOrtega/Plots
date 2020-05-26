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
  
 let object = '{ "idUsuario" : "", "usuario" : "' + usuario.userName + '", "password" : "'+usuario.password+
            '", "usuarioReg" : "", "token": "'+usuario.token+'" , "telefono": "", "solicitud":"", "aviso":1 }';
    console.log("LOGGEANDO " + object);

    this.httpClient.post<UserStorage>(PATH.BASE_API_URL + "/login", object, this.options).subscribe(
      response => {
        let date=new Date();
        console.log(date);
        response.token.replace('\n','');
        localStorage.setItem('token', response.token);
        localStorage.setItem('user', response.username);
        localStorage.setItem('time', date.toTimeString());
        localStorage.setItem('date', date.toDateString());
        this.router.navigate(['/noticiaRegular']);
      },
      Error =>{
        this.router.navigate(['/login']);
        return false;
      }
    )
    return true;
  }
  sentTokenSMSLogin(token:any){
return true;
  }
  recuperarPasswordXNumero(numero:any){
return true;
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
  permisos:string[];
}
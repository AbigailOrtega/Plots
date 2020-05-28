import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private router:Router) { 
   
  }


  ngOnInit(): void {
  }

 get date(){
   return new Date();
 }
  get localStorageAttribute(){
    return localStorage.getItem('token') && localStorage.getItem('user');
  }

  logOut(){
    localStorage.removeItem('4');
    localStorage.removeItem('6');
    localStorage.removeItem('1');
    localStorage.removeItem('5');
    localStorage.removeItem('11');
    localStorage.removeItem('12');
    localStorage.removeItem('13');
    localStorage.removeItem('token') ;
     localStorage.removeItem('user');
     this.router.navigate(['EGInforma/login']);
  }

   

   get nuevoUsuario(){
     if(localStorage.getItem('1')){
       return true;
     }
     else{
       return false;
     }
   }

   get estadisticasReportes(){
    if(localStorage.getItem('4')){
      return true;
    }
    else{
      return false;
    }
  }

  get historico(){
    if(localStorage.getItem('6')){
      return true;
    }
    else{
      return false;
    }
  }

  get agregarNoticia(){
    if(localStorage.getItem('5')){
      return true;
    }
    else{
      return false;
    }
  }

  get detenerEnvio(){
    if(localStorage.getItem('12')){
      return true;
    }
    else{
      return false;
    }
  }
}

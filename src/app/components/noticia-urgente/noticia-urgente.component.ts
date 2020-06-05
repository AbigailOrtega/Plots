import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-noticia-urgente',
  templateUrl: './noticia-urgente.component.html',
  styleUrls: ['./noticia-urgente.component.css']
})
export class NoticiaUrgenteComponent implements OnInit {

  noticiaNacional:Boolean;
  noticiaUrgente:Boolean;
  constructor(private router: Router) { 
    this.noticiaNacional=true;
    this.noticiaUrgente=true;
    if(!localStorage.getItem('token') && !localStorage.getItem('user')){
      this.router.navigate(['/login']);
    }else{
      if(!localStorage.getItem('5')){
        this.router.navigate(['/ayuda']);
      }
  }
  }

  elegirTipNoticia(tipo:string){
    if(tipo=='n'){
      this.noticiaNacional=true;
    }else{
      this.noticiaNacional=false;
    }
  }
  
 
  ngOnInit(): void {
  }

}

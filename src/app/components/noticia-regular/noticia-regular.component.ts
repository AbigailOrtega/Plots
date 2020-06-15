import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-noticia-regular',
  templateUrl: './noticia-regular.component.html',
  styleUrls: ['./noticia-regular.component.css']
})
export class NoticiaRegularComponent implements OnInit {
  noticiaNacional:Boolean;
  noticiaUrgente:Boolean;
  statusClassN = 'active';
  statusClassL = 'not-active';
  constructor(private router:Router) { 
    this.noticiaNacional=true;
    this.noticiaUrgente=false;
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
      this.statusClassN = 'active';
      this.statusClassL = 'not-active';
      this.noticiaNacional=true;
    }else{
      this.statusClassL = 'active';
      this.statusClassN = 'not-active';
      this.noticiaNacional=false;
    }
  }
 

  ngOnInit(): void {
  }

}

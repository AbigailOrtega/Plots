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
  constructor(private router:Router) { 
    this.noticiaNacional=true;
    this.noticiaUrgente=false;
    if(!localStorage.getItem('token') && !localStorage.getItem('user')){
      this.router.navigate(['/login']);
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

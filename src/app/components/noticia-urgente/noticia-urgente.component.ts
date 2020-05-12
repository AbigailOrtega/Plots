import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noticia-urgente',
  templateUrl: './noticia-urgente.component.html',
  styleUrls: ['./noticia-urgente.component.css']
})
export class NoticiaUrgenteComponent implements OnInit {

  noticiaNacional:Boolean;
  noticiaUrgente:Boolean;
  constructor() { 
    this.noticiaNacional=true;
    this.noticiaUrgente=true;
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

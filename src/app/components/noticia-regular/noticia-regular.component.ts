import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noticia-regular',
  templateUrl: './noticia-regular.component.html',
  styleUrls: ['./noticia-regular.component.css']
})
export class NoticiaRegularComponent implements OnInit {
  noticiaNacional:Boolean;
  noticiaUrgente:Boolean;
  constructor() { 
    this.noticiaNacional=true;
    this.noticiaUrgente=false;
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

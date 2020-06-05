import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

   returnPage(){
    if(localStorage.getItem('token') && localStorage.getItem('user')){
         if(localStorage.getItem('1') ){
          this.router.navigate(['/administracion']);
         }else if(localStorage.getItem('4')){
          this.router.navigate(['/smsc']);
         }else if(localStorage.getItem('6')){
          this.router.navigate(['/Historico']);
         }else if(localStorage.getItem('5')){
          this.router.navigate(['/NoticiaRegular']);
         }else{
          this.router.navigate(['/ayuda']);
         }
    }else{
      this.router.navigate(['/login']);
    }
  }
}

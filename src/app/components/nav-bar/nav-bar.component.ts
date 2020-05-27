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
    localStorage.removeItem('token') ;
     localStorage.removeItem('user');
     this.router.navigate(['/login']);
  }
}

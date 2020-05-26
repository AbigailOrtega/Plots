import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isLogged():Boolean{
    if(localStorage.getItem('token') !== null){
      return true;
    }
    else {
      return false; 
    }
  }

}

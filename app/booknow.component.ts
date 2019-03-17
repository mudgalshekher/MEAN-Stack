import { Component, OnInit, AfterViewInit} from '@angular/core';
import { Logger } from "angular2-logger/core";
import {LoggedInService} from './loggedin.service';

@Component({
  templateUrl: '../views/booknow.html', 
})

export class BookingComponent implements OnInit, AfterViewInit {

  constructor(private logger: Logger,private loggedIn: LoggedInService)
  {

  }
    
   ngOnInit(): any {	
     console.log("LOGGED IN: "+this.loggedIn.getLoggedState());
     this.setDisplay();
   }

   public setDisplay()
   {
     var floorPlan = <HTMLElement> document.getElementById('bookingArea');     
     var loginRequired = <HTMLElement> document.getElementById('loginRequired');     
     
     if (this.loggedIn.getLoggedState() == true)
     {
        floorPlan.style.display = "block";
        loginRequired.style.display = "none";
     }
     else
     {
        floorPlan.style.display = "none";
        loginRequired.style.display = "block";
     }
   }

}
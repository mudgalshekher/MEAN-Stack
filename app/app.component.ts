import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoggedInService} from './loggedin.service';
@Component({
  selector: 'my-app',
  templateUrl: '../views/appmain.html'
})
export class AppComponent implements OnInit{ 
    loginBannerText: string;
 constructor(private loggedIn: LoggedInService) {
     this.setLoginBannerText();
 }

  ngOnInit() {
this.setLoginBannerText();
  }

ngOnChanges(){

}

  public setLoginBannerText()
  {
    var loggedIn = this.loggedIn.getLoggedState();
    if(loggedIn)
    {
            this.loginBannerText = 'Logout';
    }
    if(!loggedIn)
    {
            this.loginBannerText = 'Login';
    }
  }
}
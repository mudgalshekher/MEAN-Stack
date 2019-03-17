import { Component, OnInit } from '@angular/core';
import { Logger } from "angular2-logger/core";
import {UserCredential} from './usercredential';
import {LoggedInService} from './loggedin.service';
@Component({
  selector: 'login',
  templateUrl: '../views/login.html'
})
export class LoginComponent implements OnInit{ 
static validated: boolean = false;

username = 'awesome';
credStore : UserCredential[] = [];
 constructor(private logger:Logger, private loggedIn: LoggedInService) {
    var cred1 : UserCredential = new UserCredential('admin','admin');
    this.credStore.push(cred1);    
 }
  ngOnInit() {
          this.setDisplay();
      }

public setDisplay(){
      var loggedInCard = document.getElementById('loggedInCard');
      var loggedOutCard = document.getElementById('loggedOutCard');
      if(this.loggedIn.getLoggedState()==true)    
      {               loggedInCard.style.display = "block";
                      loggedOutCard.style.display = "none";           
      }
      else
      {             loggedInCard.style.display = "none";
                    loggedOutCard.style.display = "block";
      }
}




 public validate()
    {
      var loggedInCard = document.getElementById('loggedInCard');
      var loggedOutCard = document.getElementById('loggedOutCard');
      var userfield = <HTMLInputElement> document.getElementById('user');
      var passfield = <HTMLInputElement> document.getElementById('pass');
      var username;
      var password;      
      if(userfield!=null&&passfield!=null)
      {
          username = userfield.value;
          password = passfield.value;                                        
          for(var userCred of this.credStore)
          {
            if (userCred.UserId  == username)
              if(userCred.Password == password)
                { LoginComponent.validated = true;
                  this.loggedIn.setLoggedState(true);
                  this.setDisplay();  
                }
          }
      }      
    }

public logout()
{  
    var loggedInCard = document.getElementById('loggedInCard');
    var loggedOutCard = document.getElementById('loggedOutCard');
    LoginComponent.validated = false;
    this.loggedIn.setLoggedState(false);
    this.setDisplay();  
}



}
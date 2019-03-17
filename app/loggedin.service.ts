import { Injectable } from '@angular/core';

@Injectable()
export class LoggedInService {
  loggedIn: boolean = false;

  public setLoggedState(logged: boolean)
  {
      this.loggedIn = logged;
  }
  public getLoggedState(): boolean{
      return this.loggedIn;
  }
}
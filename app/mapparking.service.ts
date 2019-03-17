import { Injectable } from '@angular/core';

@Injectable()
export class MapParking {
  loggedIn: boolean = false;

constructor()
{
    
}

  public setLoggedState(logged: boolean)
  {
      this.loggedIn = logged;
  }
  public getLoggedState(): boolean{
      return this.loggedIn;
  }
}
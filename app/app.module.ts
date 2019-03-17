import { NgModule }      from '@angular/core';
import { HttpModule}    from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from "@angular/platform-browser";
//import {RouteConfig, Router, ROUTER_PROVIDERS} from '@angular/router';
import { BookingComponent }  from './booknow.component';
import {AppComponent} from './app.component';
import {LoginComponent} from './login.component';
import { Logger, LOG_LOGGER_PROVIDERS} from "angular2-logger/core";
import {LoggedInService} from './loggedin.service';
const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'booknow', component: BookingComponent }  
];

@NgModule({
  imports: [    
	HttpModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],    
  providers: [LoggedInService, Logger, LOG_LOGGER_PROVIDERS],
  declarations: [AppComponent, LoginComponent,BookingComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
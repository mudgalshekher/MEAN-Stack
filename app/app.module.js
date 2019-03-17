"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var platform_browser_1 = require("@angular/platform-browser");
//import {RouteConfig, Router, ROUTER_PROVIDERS} from '@angular/router';
var booknow_component_1 = require("./booknow.component");
var app_component_1 = require("./app.component");
var login_component_1 = require("./login.component");
var core_2 = require("angular2-logger/core");
var loggedin_service_1 = require("./loggedin.service");
var appRoutes = [
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'booknow', component: booknow_component_1.BookingComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            http_1.HttpModule,
            platform_browser_1.BrowserModule,
            router_1.RouterModule.forRoot(appRoutes)
        ],
        exports: [router_1.RouterModule],
        providers: [loggedin_service_1.LoggedInService, core_2.Logger, core_2.LOG_LOGGER_PROVIDERS],
        declarations: [app_component_1.AppComponent, login_component_1.LoginComponent, booknow_component_1.BookingComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
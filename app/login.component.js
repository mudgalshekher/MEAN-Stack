"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_2 = require("angular2-logger/core");
var usercredential_1 = require("./usercredential");
var loggedin_service_1 = require("./loggedin.service");
var LoginComponent = LoginComponent_1 = (function () {
    function LoginComponent(logger, loggedIn) {
        this.logger = logger;
        this.loggedIn = loggedIn;
        this.username = 'awesome';
        this.credStore = [];
        var cred1 = new usercredential_1.UserCredential('admin', 'admin');
        this.credStore.push(cred1);
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.setDisplay();
    };
    LoginComponent.prototype.setDisplay = function () {
        var loggedInCard = document.getElementById('loggedInCard');
        var loggedOutCard = document.getElementById('loggedOutCard');
        if (this.loggedIn.getLoggedState() == true) {
            loggedInCard.style.display = "block";
            loggedOutCard.style.display = "none";
        }
        else {
            loggedInCard.style.display = "none";
            loggedOutCard.style.display = "block";
        }
    };
    LoginComponent.prototype.validate = function () {
        var loggedInCard = document.getElementById('loggedInCard');
        var loggedOutCard = document.getElementById('loggedOutCard');
        var userfield = document.getElementById('user');
        var passfield = document.getElementById('pass');
        var username;
        var password;
        if (userfield != null && passfield != null) {
            username = userfield.value;
            password = passfield.value;
            for (var _i = 0, _a = this.credStore; _i < _a.length; _i++) {
                var userCred = _a[_i];
                if (userCred.UserId == username)
                    if (userCred.Password == password) {
                        LoginComponent_1.validated = true;
                        this.loggedIn.setLoggedState(true);
                        this.setDisplay();
                    }
            }
        }
    };
    LoginComponent.prototype.logout = function () {
        var loggedInCard = document.getElementById('loggedInCard');
        var loggedOutCard = document.getElementById('loggedOutCard');
        LoginComponent_1.validated = false;
        this.loggedIn.setLoggedState(false);
        this.setDisplay();
    };
    return LoginComponent;
}());
LoginComponent.validated = false;
LoginComponent = LoginComponent_1 = __decorate([
    core_1.Component({
        selector: 'login',
        templateUrl: '../views/login.html'
    }),
    __metadata("design:paramtypes", [core_2.Logger, loggedin_service_1.LoggedInService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
var LoginComponent_1;
//# sourceMappingURL=login.component.js.map
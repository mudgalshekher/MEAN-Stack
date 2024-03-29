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
var loggedin_service_1 = require("./loggedin.service");
var BookingComponent = (function () {
    function BookingComponent(logger, loggedIn) {
        this.logger = logger;
        this.loggedIn = loggedIn;
    }
    BookingComponent.prototype.ngOnInit = function () {
        console.log("LOGGED IN: " + this.loggedIn.getLoggedState());
        this.setDisplay();
    };
    BookingComponent.prototype.setDisplay = function () {
        var floorPlan = document.getElementById('bookingArea');
        var loginRequired = document.getElementById('loginRequired');
        if (this.loggedIn.getLoggedState() == true) {
            floorPlan.style.display = "block";
            loginRequired.style.display = "none";
        }
        else {
            floorPlan.style.display = "none";
            loginRequired.style.display = "block";
        }
    };
    return BookingComponent;
}());
BookingComponent = __decorate([
    core_1.Component({
        templateUrl: '../views/booknow.html',
    }),
    __metadata("design:paramtypes", [core_2.Logger, loggedin_service_1.LoggedInService])
], BookingComponent);
exports.BookingComponent = BookingComponent;
//# sourceMappingURL=booknow.component.js.map
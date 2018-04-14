webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forgot_forgot_component__ = __webpack_require__("./src/app/forgot/forgot.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register_component__ = __webpack_require__("./src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard_component__ = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_4__login_login_component__["a" /* LoginComponent */] },
    { path: 'forgot', component: __WEBPACK_IMPORTED_MODULE_2__forgot_forgot_component__["a" /* ForgotComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_3__register_register_component__["a" /* RegisterComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_4__login_login_component__["a" /* LoginComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<header>\n  <p routerLink=\"/login\"><i class=\"glyphicon glyphicon-calendar calendar\"></i> <span>AppointerX</span></p>\n</header>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.less":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.less")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__forgot_forgot_component__ = __webpack_require__("./src/app/forgot/forgot.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__register_register_component__ = __webpack_require__("./src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__user_service__ = __webpack_require__("./src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dashboard_dashboard_component__ = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_7__forgot_forgot_component__["a" /* ForgotComponent */],
                __WEBPACK_IMPORTED_MODULE_8__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_10__dashboard_dashboard_component__["a" /* DashboardComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_9__user_service__["a" /* UserService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  dashboard works!\n</p>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.less":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/dashboard.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/forgot/forgot.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"text-center\">\n      <h1>Forgot Password?</h1>\n      <h5>Reset your password from mail</h5>\n  </div>\n  <br>\n  <form class=\"form-horizontal appointment\" action=\"/action_page.php\" >\n      <div class=\"form-group\">\n          <label class=\"control-label col-sm-2 col-xs-1\" for=\"email\"><i class=\"glyphicon glyphicon-user user\"></i></label>\n          <div class=\"col-xs-10\">\n              <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Email*\" name=\"email\">\n              <label>Email*</label>\n          </div>\n      </div>\n      <div class=\"form-group\">\n          <div>\n              <button type=\"submit\" >SUBMIT</button>\n          </div>\n          <div class=\"ftr\">\n                  <p class=\"text-left reg\"><a routerLink=\"/register\">REGISTER NOW!</a></p>\n                  <p class=\"text-right reg\"><a routerLink=\"/login\">LOGIN</a></p>\n              </div>\n      </div>\n      \n  </form>\n</div>  "

/***/ }),

/***/ "./src/app/forgot/forgot.component.less":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/forgot/forgot.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ForgotComponent = /** @class */ (function () {
    function ForgotComponent() {
    }
    ForgotComponent.prototype.ngOnInit = function () {
    };
    ForgotComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-forgot',
            template: __webpack_require__("./src/app/forgot/forgot.component.html"),
            styles: [__webpack_require__("./src/app/forgot/forgot.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], ForgotComponent);
    return ForgotComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"container\">\n<div class=\"imgcontainer text-center\">\n  <img src=\"login.jpg\" alt=\"Avatar\" class=\"avatar\">\n  <h6>APPOINTMENT MANAGER</h6>\n</div>\n<br>\n<form class=\"form-horizontal appointment\" action=\"/action_page.php\" >\n  <div class=\"form-group\">\n      <label class=\"control-label col-sm-2 col-xs-1\" for=\"email\"><i class=\"glyphicon glyphicon-user user\"></i></label>\n      <div class=\"col-xs-10\">\n          <input type=\"email\" class=\"form-control\" id=\"email\" [(ngModel)]=\"loginData.email\" placeholder=\"Email*\" name=\"email\">\n          <label>Email*</label>\n      </div>\n  </div>\n  <div class=\"form-group\">\n      <label class=\"control-label col-sm-2 col-xs-1\" for=\"password\"><i class=\"glyphicon glyphicon-lock user\"></i></label>\n      <div class=\"col-xs-10 \">\n          <input type=\"password\" class=\"form-control\" id=\"password\" [(ngModel)]=\"loginData.password\" placeholder=\"Password*\" name=\"password\">\n          <label>Password*</label>\n      </div>\n  </div>\n  <div class=\"form-group\">\n      <div>\n          <button (click)=\"onLoginUser()\">LOGIN</button>\n      </div>\n      <div class=\"ftr\">\n              <p class=\"text-left reg\"><a routerLink=\"/register\">REGISTER NOW!</a></p>\n              <p class=\"text-right reg\"><a routerLink=\"/forgot\">FORGOT PASSWORD ?</a></p>\n          </div>\n  </div>\n  \n</form>\n</div>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/login/login.component.less":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("./src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.loginData = {};
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginUser = function () {
        var _this = this;
        this.userService.onLoginUser(this.loginData)
            .subscribe(function (data) {
            if (data) {
                _this.router.navigate(['/dashboard']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.less")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"imgcontainer text-center\">\n      <h2>Join Now</h2>\n  </div>\n  <br>\n  <form class=\"form-horizontal appointment\" >\n      <div class=\"form-group\">\n          <label class=\"control-label col-sm-1 col-xs-1\" for=\"firstname\">\n              <i class=\"glyphicon glyphicon-pencil reg1\"></i>\n          </label>\n          <div class=\"col-xs-5\">\n              <input type=\"text\" class=\"form-control\" id=\"FirstName\" [(ngModel)]=\"registerUserData.firstname\" placeholder=\"First Name\" name=\"firstname\">\n              <label>First Name*</label>\n          </div>\n          <label class=\"control-label col-sm-1 col-xs-1\" for=\"lastname\">\n              <i class=\"glyphicon glyphicon-pencil reg1\"></i>\n          </label>\n          <div class=\"col-xs-5\">\n              <input type=\"text\" class=\"form-control\" id=\"LastName\" [(ngModel)]=\"registerUserData.lastname\" placeholder=\"Last Name\" name=\"lastname\">\n              <label>Last Name*</label>\n              \n          </div>\n      </div>\n      <div class=\"form-group\">\n          <label class=\"control-label col-sm-1 col-xs-1\" for=\"email\">\n              <i class=\"glyphicon glyphicon-user reg1\"></i>\n          </label>\n          <div class=\"col-xs-5\">\n              <input type=\"email\" class=\"form-control\" id=\"email\" [(ngModel)]=\"registerUserData.email\" placeholder=\"Email\" name=\"email\">\n              <label>Email*</label>\n              \n          </div>\n          <label class=\"control-label col-sm-1 col-xs-1\" for=\"password\">\n              <i class=\"glyphicon glyphicon-lock reg1\"></i>\n          </label>\n          <div class=\"col-xs-5\">\n              <input type=\"password\" class=\"form-control\" id=\"password\" [(ngModel)]=\"registerUserData.password\" placeholder=\"Password\" name=\"pwd\">\n              <label>Password*</label>\n              \n          </div>\n      </div>\n      <div class=\"form-group\">\n          <label class=\"control-label col-sm-1 col-xs-1\" for=\"role\">\n              <i class=\"glyphicon glyphicon-pencil reg1\"></i>\n          </label>\n          <div class=\"col-xs-11\">\n              <select class=\"form-control role\" id=\"sel1\" [(ngModel)]='registerUserData.role'  name=\"role\">\n                  <option>Select your profile</option>  \n                <option class='option' *ngFor='let option of doctorsType' [value]=\"option\">{{option}}</option>\n              </select>\n              <!-- <select class=\"form-control role\" id=\"sel1\" onchange=\"phy()\">\n                  <option disabled hidden selected>Select your profile</option>\n                  <option>Patient</option>\n                  <option>Physician</option>\n              </select> -->\n              <label>Select Role*</label>\n          </div>\n      </div>\n      <div class=\"form-group\"  *ngIf=\"registerUserData.role == 'Physician'\">\n          <label class=\"control-label col-sm-1 col-xs-1\" for=\"npi\">\n              <i class=\"glyphicon glyphicon-pencil reg1\"></i>\n          </label>\n          <div class=\"col-xs-5\">\n              <input type=\"text\" class=\"form-control\" id=\"NPI\" [(ngModel)]='registerUserData.npi' placeholder=\"NPI\" name=\"npi\">\n              <label>NPI*</label>\n              \n          </div>\n          <label class=\"control-label col-sm-1 col-xs-1\" for=\"location\">\n              <i class=\"glyphicon glyphicon-pencil reg1\"></i>\n          </label>\n          <div class=\"col-xs-5\">\n              <input type=\"text\" class=\"form-control\" id=\"Location\" [(ngModel)]='registerUserData.location' placeholder=\"Location*\" name=\"location\">\n              <label>Location</label>\n              \n          </div>\n          <label class=\"control-label col-sm-1 col-xs-1\" for=\"add1\">\n              <i class=\"glyphicon glyphicon-pencil reg1\"></i>\n          </label>\n          <div class=\"col-xs-5\">\n              <input type=\"text\" class=\"form-control\" id=\"add1\" [(ngModel)]='registerUserData.add1' placeholder=\"address1\" name=\"add1\">\n              <label>address1</label>\n              \n          </div>\n          <label class=\"control-label col-sm-1 col-xs-1\" for=\"add2\">\n              <i class=\"glyphicon glyphicon-pencil reg1\"></i>\n          </label>\n          <div class=\"col-xs-5\">\n              <input type=\"text\" class=\"form-control\" id=\"add2\" [(ngModel)]='registerUserData.add2' placeholder=\"address2\" name=\"add2\">\n              <label>address2</label>\n          </div>\n          <label class=\"control-label col-sm-1 col-xs-1\" for=\"city\">\n              <i class=\"glyphicon glyphicon-pencil reg1\"></i>\n          </label>\n          <div class=\"col-xs-5\">\n              <input type=\"text\" class=\"form-control\" id=\"City\" [(ngModel)]='registerUserData.city' placeholder=\"City\" name=\"city\">\n              <label>City</label>\n          </div>\n          <label class=\"control-label col-sm-1 col-xs-1\" for=\"pincode\">\n              <i class=\"glyphicon glyphicon-pencil reg1\"></i>\n          </label>\n          <div class=\"col-xs-5\">\n              <input type=\"text\" class=\"form-control\" id=\"Pincode\" [(ngModel)]='registerUserData.pincode' placeholder=\"Pincode*\" name=\"pincode\">\n              <label>Pincode*</label>\n          </div>\n          <label class=\"control-label col-sm-1 col-xs-1\" for=\"state\">\n              <i class=\"glyphicon glyphicon-pencil reg1\"></i>\n          </label>\n          <div class=\"col-xs-5\">\n              <input type=\"text\" class=\"form-control\" id=\"Satet\" [(ngModel)]='registerUserData.state' placeholder=\"State\" name=\"state\">\n              <label>State</label>\n          </div>\n          <label class=\"control-label col-sm-1 col-xs-1\" for=\"country\">\n              <i class=\"glyphicon glyphicon-pencil reg1\"></i>\n          </label>\n          <div class=\"col-xs-5\">\n              <input type=\"text\" class=\"form-control\" id=\"Country\" [(ngModel)]='registerUserData.country' placeholder=\"Country\" name=\"country\">\n              <label>Country</label>\n          </div>\n      </div>\n      <div class=\"form-group\">\n          <div>\n              <button (click)=\"registerUser()\">SIGN UP</button>\n          </div>\n          <div class=\"Opt-Login\">\n              Already have account? <a routerLink=\"/login\" class=\"redirect-login\">LOGIN</a>\n          </div>\n      </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/register/register.component.less":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("./src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.doctorsType = ['Patient', 'Physician'];
        this.registerUserData = {};
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.registerUser = function () {
        var _this = this;
        this.userService.onRegisterUser(this.registerUserData)
            .subscribe(function (data) {
            console.log("adding form values");
            console.log(data);
            if (data) {
                _this.router.navigate(['/dashboard']);
            }
        });
        // this._auth.registerUser(this.registerUserData)
        // .subscribe(
        //   res => {
        //     localStorage.setItem('token', res.token)
        //     this._router.navigate(['/special'])
        //   },
        //   err => console.log(err)
        // )      
    };
    RegisterComponent.prototype.submit = function () {
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("./src/app/register/register.component.html"),
            styles: [__webpack_require__("./src/app/register/register.component.less")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this._registerUrl = "http://localhost:3000/api/register";
        this._loginUrl = "http://localhost:3000/api/login";
    }
    UserService.prototype.onRegisterUser = function (user) {
        return this.http.post(this._registerUrl, user);
    };
    UserService.prototype.onLoginUser = function (user) {
        return this.http.post(this._loginUrl, user);
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
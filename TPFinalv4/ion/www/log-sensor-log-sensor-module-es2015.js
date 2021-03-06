(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["log-sensor-log-sensor-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/log-sensor/log-sensor.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/log-sensor/log-sensor.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"danger\">\n      <ion-buttons slot=\"start\">\n          <ion-button routerLink=\"/detalle-sensor/{{this.idDispositivo}}\" routerDirection=\"back\">\n              <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n          </ion-button>\n      </ion-buttons>\n      <ion-title>Log Mediciones Dispositivo - {{this.idDispositivo}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid class=\"ion-align-items-center\">\n    <ion-row >\n      <ion-col>Id del Dispositivo</ion-col>\n      <ion-col>Fecha</ion-col>\n      <ion-col>Id de la medición</ion-col>\n      <ion-col>Valor</ion-col>  \n    </ion-row>\n\n    <ion-row  *ngFor=\"let med of this.medicionArray\">\n      <ion-col>{{med.dispositivoId}}</ion-col>   \n      <ion-col>{{med.fecha | fechaPipe}}</ion-col>     \n      <ion-col>{{med.medicionId}}</ion-col>    \n      <ion-col>{{med.valor}}</ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n");

/***/ }),

/***/ "./src/app/log-sensor/log-sensor-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/log-sensor/log-sensor-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: LogSensorPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogSensorPageRoutingModule", function() { return LogSensorPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _log_sensor_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./log-sensor.page */ "./src/app/log-sensor/log-sensor.page.ts");




const routes = [
    {
        path: '',
        component: _log_sensor_page__WEBPACK_IMPORTED_MODULE_3__["LogSensorPage"]
    }
];
let LogSensorPageRoutingModule = class LogSensorPageRoutingModule {
};
LogSensorPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LogSensorPageRoutingModule);



/***/ }),

/***/ "./src/app/log-sensor/log-sensor.module.ts":
/*!*************************************************!*\
  !*** ./src/app/log-sensor/log-sensor.module.ts ***!
  \*************************************************/
/*! exports provided: LogSensorPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogSensorPageModule", function() { return LogSensorPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _log_sensor_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./log-sensor-routing.module */ "./src/app/log-sensor/log-sensor-routing.module.ts");
/* harmony import */ var _log_sensor_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./log-sensor.page */ "./src/app/log-sensor/log-sensor.page.ts");
/* harmony import */ var _pipes_fecha_pipe_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pipes/fecha-pipe.pipe */ "./src/app/pipes/fecha-pipe.pipe.ts");








let LogSensorPageModule = class LogSensorPageModule {
};
LogSensorPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _log_sensor_routing_module__WEBPACK_IMPORTED_MODULE_5__["LogSensorPageRoutingModule"]
        ],
        declarations: [_log_sensor_page__WEBPACK_IMPORTED_MODULE_6__["LogSensorPage"], _pipes_fecha_pipe_pipe__WEBPACK_IMPORTED_MODULE_7__["FechaPipePipe"]]
    })
], LogSensorPageModule);



/***/ }),

/***/ "./src/app/log-sensor/log-sensor.page.scss":
/*!*************************************************!*\
  !*** ./src/app/log-sensor/log-sensor.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZy1zZW5zb3IvbG9nLXNlbnNvci5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/log-sensor/log-sensor.page.ts":
/*!***********************************************!*\
  !*** ./src/app/log-sensor/log-sensor.page.ts ***!
  \***********************************************/
/*! exports provided: LogSensorPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogSensorPage", function() { return LogSensorPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_medicion_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/medicion.service */ "./src/app/services/medicion.service.ts");




let LogSensorPage = class LogSensorPage {
    constructor(router, mServ) {
        this.router = router;
        this.mServ = mServ;
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Tomo el Id del dispositivo por argumento
            this.idDispositivo = this.router.snapshot.paramMap.get('id');
            // Hago consulta para traerme todos los logs
            this.medicionArray = yield this.mServ.getMedicionesByIdDispositivo(this.idDispositivo);
        });
    }
};
LogSensorPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_medicion_service__WEBPACK_IMPORTED_MODULE_3__["MedicionService"] }
];
LogSensorPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-log-sensor',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./log-sensor.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/log-sensor/log-sensor.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./log-sensor.page.scss */ "./src/app/log-sensor/log-sensor.page.scss")).default]
    })
], LogSensorPage);



/***/ })

}]);
//# sourceMappingURL=log-sensor-log-sensor-module-es2015.js.map
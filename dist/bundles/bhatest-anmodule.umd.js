(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define(['exports', '@angular/core'], factory) :
    (factory((global.ng = global.ng || {}, global.ng.asyncLocalStorage = global.ng.asyncLocalStorage || {}),global.ng.core));
}(this, (function (exports,_angular_core) { 'use strict';

var BhatestHolaComponent = (function () {
    function BhatestHolaComponent() {
        this.saludar = "Hola module";
    }
    BhatestHolaComponent.prototype.ngOnInit = function () {
    };
    BhatestHolaComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'bhatest-hola',
                    templateUrl: './bhatest-hola.component.html',
                    styleUrls: ['./bhatest-hola.component.css']
                },] },
    ];
    /** @nocollapse */
    BhatestHolaComponent.ctorParameters = function () { return []; };
    return BhatestHolaComponent;
}());

var BhatestHolaService = (function () {
    function BhatestHolaService() {
    }
    BhatestHolaService.prototype.saludar = function () {
        return "hola";
    };
    BhatestHolaService.decorators = [
        { type: _angular_core.Injectable },
    ];
    /** @nocollapse */
    BhatestHolaService.ctorParameters = function () { return []; };
    return BhatestHolaService;
}());

var BhatetsAnModule = (function () {
    function BhatetsAnModule() {
    }
    BhatetsAnModule.decorators = [
        { type: _angular_core.NgModule, args: [{
                    declarations: [
                        BhatestHolaComponent
                    ],
                    exports: [BhatestHolaComponent],
                    imports: [],
                    providers: [BhatestHolaService]
                },] },
    ];
    /** @nocollapse */
    BhatetsAnModule.ctorParameters = function () { return []; };
    return BhatetsAnModule;
}());

/**
 * @module
 * @description
 * Entry point for all public APIs of the async local storage package.
 */

exports.BhatetsAnModule = BhatetsAnModule;
exports.BhatestHolaComponent = BhatestHolaComponent;
exports.BhatestHolaService = BhatestHolaService;

Object.defineProperty(exports, '__esModule', { value: true });

})));

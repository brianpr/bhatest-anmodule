import { NgModule } from '@angular/core';
import { BhatestHolaComponent } from './components/bhatest-hola.component';
import { BhatestHolaService } from './services/bhatest-hola.service';
export var BhatetsAnModule = (function () {
    function BhatetsAnModule() {
    }
    BhatetsAnModule.decorators = [
        { type: NgModule, args: [{
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
//# sourceMappingURL=bhatest-anmodule.module.js.map
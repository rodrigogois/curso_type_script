define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Validators = /** @class */ (function () {
        function Validators() {
        }
        Validators.required = function (value) {
            return typeof value != null && value != '' && value != undefined;
        };
        return Validators;
    }());
    exports.default = Validators;
});
//# sourceMappingURL=validators.js.map
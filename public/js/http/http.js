define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var HttpVerbs;
    (function (HttpVerbs) {
        HttpVerbs["GET"] = "GET";
        HttpVerbs["POST"] = "POST";
    })(HttpVerbs || (HttpVerbs = {}));
    var Http = /** @class */ (function () {
        function Http() {
        }
        Http.prototype.get = function (url) {
            var xhttp = this.createXhttp(HttpVerbs.GET, url);
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    callable(this.responseText);
                }
            };
            xhttp.send();
        };
        Http.prototype.createXhttp = function (verb, url) {
            var xhttp = new XMLHttpRequest();
            xhttp.open(verb, url, true);
            return xhttp;
        };
        Http.prototype.post = function () {
        };
        return Http;
    }());
    exports.default = Http;
});
//# sourceMappingURL=http.js.map
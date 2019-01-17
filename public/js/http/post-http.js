define(["require", "exports", "./http"], function (require, exports, http_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PostHttp = /** @class */ (function () {
        function PostHttp() {
            this.http = new http_1.default();
        }
        PostHttp.prototype.query = function () {
            this.http.get('http://gateway.marvel.com:80/v1/public/characters')
                .then(function (response) {
                console.log(JSON.parse(response.body));
                console.log(response.status);
            });
        };
        PostHttp.prototype.save = function () {
        };
        return PostHttp;
    }());
    exports.default = PostHttp;
});
//# sourceMappingURL=post-http.js.map
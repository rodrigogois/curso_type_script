define(["require", "exports", "./http"], function (require, exports, http_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PostHttp = /** @class */ (function () {
        function PostHttp() {
            this.http = new http_1.default();
        }
        PostHttp.prototype.query = function () {
            return this.http.get('https://jsonplaceholder.typicode.com/posts')
                .then(function (response) {
                console.table(JSON.parse(response.body));
                return JSON.parse(response.body);
            });
        };
        PostHttp.prototype.save = function () {
        };
        return PostHttp;
    }());
    exports.default = PostHttp;
});
//# sourceMappingURL=post-http.js.map
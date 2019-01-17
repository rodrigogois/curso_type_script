define(["require", "exports", "./http"], function (require, exports, http_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PostHttp = /** @class */ (function () {
        function PostHttp() {
            this.http = new http_1.default();
        }
        PostHttp.prototype.query = function (callable) {
            this.http.get('https://jsonplaceholder.typicode.com/posts');
        };
        PostHttp.prototype.save = function () {
        };
        return PostHttp;
    }());
    exports.default = PostHttp;
});
//# sourceMappingURL=post-http.js.map
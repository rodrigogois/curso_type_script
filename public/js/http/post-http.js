define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PostHttp = /** @class */ (function () {
        function PostHttp() {
        }
        PostHttp.prototype.query = function () {
            var xhttp = new XMLHttpRequest();
            xhttp.open('GET', 'https://jsonplaceholder.typicode.com/posts');
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    console.log(this.responseText);
                }
            };
            xhttp.send();
        };
        PostHttp.prototype.save = function () {
        };
        return PostHttp;
    }());
    exports.default = PostHttp;
});
//# sourceMappingURL=post-http.js.map
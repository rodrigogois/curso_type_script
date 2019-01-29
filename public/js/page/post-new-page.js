define(["require", "exports", "../http/post-http"], function (require, exports, post_http_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PostNewPage = /** @class */ (function () {
        function PostNewPage(postHttp) {
            this.postHttp = postHttp;
            this.init();
        }
        PostNewPage.prototype.init = function () {
            var _this = this;
            document.querySelector('#my-form').addEventListener('submit', function (event) {
                event.preventDefault();
                _this.submit();
                return false;
            });
        };
        PostNewPage.prototype.submit = function () {
        };
        PostNewPage.prototype.isvalid = function () {
            return true;
        };
        return PostNewPage;
    }());
    var postHttp = new post_http_1.default();
});
//# sourceMappingURL=post-new-page.js.map
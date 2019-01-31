define(["require", "exports", "../components/form", "../components/validators/validator-manager", "../components/validators/validators", "../http/post-http"], function (require, exports, form_1, validator_manager_1, validators_1, post_http_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PostNewPage = /** @class */ (function () {
        function PostNewPage(postHttp) {
            this.postHttp = postHttp;
            this.init();
        }
        PostNewPage.prototype.init = function () {
            var _this = this;
            document
                .querySelector("#my-form")
                .addEventListener("submit", function (event) {
                event.preventDefault();
                _this.submit();
                return false;
            });
        };
        PostNewPage.prototype.submit = function () {
            var _this = this;
            if (this.isvalid()) {
                return;
            }
            this.postHttp
                .save({
                body: form_1.default.getValueFromField("#body"),
                title: form_1.default.getValueFromField("#title"),
            })
                .then(function (obj) { return _this.goToListPost(); });
        };
        PostNewPage.prototype.goToListPost = function () {
            window.location.href = "/post/post-list.html";
        };
        PostNewPage.prototype.isvalid = function () {
            var validator = new validator_manager_1.default([
                {
                    selectorField: "#title",
                    // tslint:disable-next-line:object-literal-sort-keys
                    rules: [validators_1.default.required],
                    messageInvalid: "Titulo invalido",
                },
                {
                    selectorField: "#body",
                    // tslint:disable-next-line:object-literal-sort-keys
                    rules: [validators_1.default.required],
                    messageInvalid: "Conteudo invalido",
                }
            ]);
            return validator.isValid();
        };
        return PostNewPage;
    }());
    new PostNewPage(new post_http_1.default());
});
//# sourceMappingURL=post-new-page.js.map
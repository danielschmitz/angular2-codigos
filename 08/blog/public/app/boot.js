System.register(['angular2/platform/browser', './app.component', 'angular2/http', './service/login', './service/headers'], function(exports_1) {
    var browser_1, app_component_1, http_1, login_1, headers_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (login_1_1) {
                login_1 = login_1_1;
            },
            function (headers_1_1) {
                headers_1 = headers_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [headers_1.HeadersService, http_1.HTTP_PROVIDERS, login_1.LoginService]);
        }
    }
});
//# sourceMappingURL=boot.js.map
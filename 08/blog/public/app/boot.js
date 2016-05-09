System.register(['@angular/platform-browser-dynamic', './app.component', '@angular/http', './service/login', './service/headers'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_dynamic_1, app_component_1, http_1, login_1, headers_1;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
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
            platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [headers_1.HeadersService, http_1.HTTP_PROVIDERS, login_1.LoginService]);
        }
    }
});
//# sourceMappingURL=boot.js.map
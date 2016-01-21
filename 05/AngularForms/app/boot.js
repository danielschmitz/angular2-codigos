System.register(['angular2/platform/browser', './app.component', './mock'], function(exports_1) {
    var browser_1, app_component_1, mock_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (mock_1_1) {
                mock_1 = mock_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [mock_1.Mock]);
        }
    }
});
//# sourceMappingURL=boot.js.map
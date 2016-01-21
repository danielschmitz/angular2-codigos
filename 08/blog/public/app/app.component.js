System.register(['angular2/core', 'angular2/router', './component', './service/login'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, component_1, login_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (component_1_1) {
                component_1 = component_1_1;
            },
            function (login_1_1) {
                login_1 = login_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_loginService) {
                    this._loginService = _loginService;
                    this.title = "Blog";
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        providers: [router_1.ROUTER_PROVIDERS],
                        directives: [router_1.ROUTER_DIRECTIVES],
                        templateUrl: 'appComponent.html',
                    }),
                    router_1.RouteConfig([
                        { path: '/', name: 'Home', component: component_1.HomeComponent, useAsDefault: true },
                        { path: '/Login', name: 'Login', component: component_1.LoginComponent },
                        { path: '/Addpost', name: 'AddPost', component: component_1.AddPostComponent }
                    ]), 
                    __metadata('design:paramtypes', [login_1.LoginService])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map
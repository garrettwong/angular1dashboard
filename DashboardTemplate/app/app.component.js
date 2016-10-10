(function() {
    'use strict';

    var appModule = angular.module('app');

    function controller() {
        var model = this;

        model.navbarSideExpanded = ''; // or 'expanded';

        
    }

    appModule.component('app', {
        templateUrl: "/app/app.component.html",
        controllerAs: 'model',
        controller: controller,

        $routeConfig: [
            { path: "/home", component:"home", name: "Home" },
            { path: "/dashboard", component:"dashboard", name: "Dashboard" },
            
            { path: "/admin/settings", component:"dashboard", name: "AdminSettings" },
            { path: "/admin/user", component:"dashboard", name: "AdminUser" },
            { path: "/**", redirectTo: ["Home", ""] }
        ]
    });

    
}());

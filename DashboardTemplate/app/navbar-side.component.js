(function() {
    "use strict";
    
    var module = angular.module("app");

    function controller(AppSettings) {
        var model = this;

        model.title = AppSettings.title;
    }

    module.component("navbarSide", {
        templateUrl: '/app/navbar-side.component.html',

        controllerAs: 'model',
        controller: ['AppSettings', controller]
    });
     
}());
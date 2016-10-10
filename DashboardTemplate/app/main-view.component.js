(function() {
    "use strict";
    
    var module = angular.module("app");

    function controller(AppSettings) {
        var model = this;

        model.title = AppSettings.title;
    }

    module.component("mainView", {
        templateUrl: '/app/main-view.component.html',
        controllerAs: 'model',
        controller: ['AppSettings', controller],

        
        bindings: {
            "$router": "<"
        },
    });
     
}());
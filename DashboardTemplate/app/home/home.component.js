(function() {
    'use strict';

    var homeModule = angular.module('Home', []);

    function controller() {
        var model = this;


    }

    homeModule.component('home', {
        templateUrl: "/app/home/home.component.html",
        controllerAs: 'model',
        controller: controller
    });

    
}());

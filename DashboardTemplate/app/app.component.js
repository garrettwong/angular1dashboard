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
        controller: controller
    });

    
}());

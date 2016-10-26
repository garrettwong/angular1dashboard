(function() {
    'use strict';

    var homeModule = angular.module('Home', ['ui.router']);

    function controller() {
        var model = this;
    }

    homeModule.component('home', {
        templateUrl: "/app/home/home.component.html",
        controllerAs: 'model',
        controller: controller
    });

    homeModule.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');

        $stateProvider.state('home', {
              url: '/home',
              component: 'home'
          });
    });

}());

//import angular from 'angular';

(function () {
    'use strict';

    var module = angular.module('app', [
        'ngComponentRouter',
        'Home',
        'dashboard', 
        'ngAnimate']);

    module.value('$routerRootComponent', 'app');
}());
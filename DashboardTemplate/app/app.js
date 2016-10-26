﻿(function () {
    'use strict';

    var module = angular.module('app', [
        'ui.router',
        'ngAnimate',

        'Home',
        'Dashboard']);

    module.config(function ($locationProvider) {
        "ngInject";
        // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
        // #how-to-configure-your-server-to-work-with-html5mode
        $locationProvider.html5Mode(true).hashPrefix('!');
    });

}());
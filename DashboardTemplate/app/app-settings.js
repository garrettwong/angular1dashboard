(function () {
    'use strict';

    // globals, shared variables
    var module = angular.module('app');

    module.factory('AppSettings', function () {
        var appSettings = {};

        appSettings.title = 'Dashboard';

        return appSettings;
    });
    
}());
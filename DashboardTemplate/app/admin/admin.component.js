(function() {
    'use strict';

    var module = angular.module('Admin', ['ui.router']);

    function controller() {

    }

    module.component('admin', {
        templateUrl: "/app/admin/admin.component.html",
        controller: controller
    });

    module.config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('admin', {
            url: '/admin',
            component: 'admin'
        });

        $stateProvider.state('settings', {
            url: '/settings',
            component: 'settings'
        });

        $stateProvider.state('users', {
            url: '/users',
            component: 'userlist'
        });
    });

}());

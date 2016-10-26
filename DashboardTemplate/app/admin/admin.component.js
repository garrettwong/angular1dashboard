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
            component: 'userlist',
            resolve: {
                users: function(UserService) {
                    console.log(UserService);
                    return UserService.getAll();
                }
            }
        });

        $stateProvider.state('users.user', {
            url: '/{userId}',
            component: 'user',
            resolve: {
                user: function(users, $stateParams) {
                    return users.find(function(user) {
                        return user.id === $stateParams.userId;
                    });
                }
            }
        });
    });

}());

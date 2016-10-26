(function () {
    'use strict';

    var module = angular.module('Admin', ['ui.router', 'ui.router.state.events', 'CommonServices']);

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
            component: 'settings',
            data: {
                authorization: true,
                roles: ['Admin'],
                redirectTo: 'users'
            }
        });

        $stateProvider.state('users', {
            url: '/users',
            component: 'userlist',
            resolve: {
                users: function (UserService) {
                    console.log(UserService);
                    return UserService.getAll();
                }
            }
        });

        $stateProvider.state('users.user', {
            url: '/{userId}',
            component: 'user',
            resolve: {
                user: function (users, $stateParams) {
                    return users.find(function (user) {
                        return user.id === $stateParams.userId;
                    });
                }
            }
        });
    });


    module.run(function ($rootScope, $state, Authorization) {
        // UI-Router 1.x
        // this requires including the stateEvents.js library @ref https://ui-router.github.io/docs/latest/modules/ng1_state_events.html
        // we also need to inject 'ui.router.state.events' into the module
        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
            if (!Authorization.authorized && toState !== undefined) {
                if (Authorization.memorizedState && (!fromState.data.hasOwnProperty('redirectTo') || toState.name !== fromState.data.redirectTo)) {
                    Authorization.clear();
                }

                if (toState.hasOwnProperty('data') && toState.data.hasOwnProperty('authorization') && toState.data.hasOwnProperty('redirectTo')) {
                    if (toState.data.hasOwnProperty('memory')) {
                        Authorization.memorizedState = toState.name;
                    }

                    $state.go(toState.data.redirectTo);
                }
            }
        });

        $rootScope.onLogout = function () {
            Authorization.clear();
            $state.go('home');
        };
    });

} ());

(function () {
    'use strict';

    // globals, shared variables
    var module = angular.module('app');

    module.factory('UserService', function ($http) {
        var userService = {};

        userService.getCurrentUser = function () {
            return {
                fullName: 'Garrett Wong',
                email: 'Garrett.Wong@garrettwong.com',
                username: 'garrett@garrettwong.com',
                imageUrl: '/images/profile.jpg'
            };
        };

        userService.getAll = function () {
            return $http.get('data/users.json', { cache: true }).then(function (resp) {
                return resp.data;
            });
        };

        userService.getUser = function (id) {
            function userMatchesParam(user) {
                return user.id === id;
            }

            return service.getAll().then(function (users) {
                return users.find(userMatchesParam)
            });
        };

        return userService;
    });


} ());
(function () {
    'use strict';

    // globals, shared variables
    var module = angular.module('app');

    module.factory('UserService', function () {
        var userService = {};

        userService.getCurrentUser = function () {
            return {
                fullName: 'Garrett Wong',
                email: 'Garrett.Wong@garrettwong.com',
                username: 'garrett@garrettwong.com',
                imageUrl: '/images/profile.jpg'
            };
        };

        return userService;
    });


}());
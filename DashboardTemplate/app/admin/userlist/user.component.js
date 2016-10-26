(function() {
    'use strict';

    var module = angular.module('Admin');

    function controller() {
        console.log(this.user);
    }

    module.component('user', {
        templateUrl: "/app/admin/userlist/user.component.html",
        controller: controller,
        bindings: {
            user: '<'
        }
    });

}());

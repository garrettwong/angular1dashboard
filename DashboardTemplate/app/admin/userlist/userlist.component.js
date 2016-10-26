(function() {
    'use strict';

    var module = angular.module('Admin');

    function controller() {
        console.log(this.users);
    }

    module.component('userlist', {
        templateUrl: "/app/admin/userlist/userlist.component.html",
        controller: controller,
        bindings: {
            users: '<'
        }
    });

}());

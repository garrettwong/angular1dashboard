(function() {
    "use strict";
    
    var module = angular.module("app");

    function controller(AppSettings, UserService) {
        var model = this;

        model.user = UserService.getCurrentUser();

        model.toggle = function () {
            model.navbarSideExpanded = model.navbarSideExpanded !== '' ? '' : 'expanded';
            model.onViewChange({ $event: { navbarSideExpanded: model.navbarSideExpanded } });
        };
    }

    module.component("navbarTop", {
        templateUrl: '/app/navbar-top.component.html',
        controllerAs: 'model',
        controller: ['AppSettings', 'UserService', controller],

        bindings: {
            navbarSideExpanded: '<',
            onViewChange: '&'
        }
    });
     
}());
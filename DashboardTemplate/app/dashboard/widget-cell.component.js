(function () {
    'use strict';
    
    var module = angular.module('Dashboard');

    // Widget Cell Container
    function controller($rootScope, $uibModal) {
        var model = this;

        // on trash can click
	    model.remove = function (widget) {
	        alert('remove clicked');

	        // let's figure out what we need to do for model.dashboard
	        console.log(model);

	        $rootScope.$broadcast('widgetRemoved', widget);
	    };

        // on cogs click
        model.openSettings = function () {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: '/app/dashboard/widgets/widget-settings.html',
                controller: 'WidgetModalInstanceCtrl',
                size: 'lg',
                resolve: {
                    widget: function () {
                        return model.widget
                    }
                }
            });

	        modalInstance.result.then(function (job) {
	            model.selected = job;
	        }, function () {
                
	        });
        };
    }

    // export component
    module.component('widgetCell', {
        templateUrl: "/app/dashboard/widget-cell.component.html",
        controllerAs: 'model',
        controller: ['$rootScope', '$uibModal', controller],

        // bind to the widget property
        bindings: {
            widget: '<'
        }
    });
})();
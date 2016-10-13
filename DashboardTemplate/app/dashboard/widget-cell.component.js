(function () {
    'use strict';
    
    var module = angular.module('dashboard');

    // Widget Cell Container
    function controller($uibModal) {
        var model = this;

        // on trash can click
	    model.remove = function (widget) {
	        alert('remove clicked');

	        // let's figure out what we need to do for model.dashboard
	        console.log(model);


	        console.log('remove called to splice widgets', widget, model.dashboard);

	        model.dashboard.widgets.splice($scope.dashboard.widgets.indexOf(widget), 1);

	        DashboardService.update(model.dashboards);
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
        controller: ['$uibModal', controller],

        // bind to the widget property
        bindings: {
            widget: '<'
        }
    });
})();
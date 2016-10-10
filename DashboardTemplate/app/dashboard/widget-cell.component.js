(function () {
    'use strict';
    
    var module = angular.module('dashboard');

    function controller($uibModal) {
        var model = this;

        console.log(model);

	    model.remove = function (widget) {
            // send a remove request to the dashboard 

            console.log('remove called to splice widgets', widget, model.dashboard);

	        model.dashboard.widgets.splice($scope.dashboard.widgets.indexOf(widget), 1);

	        DashboardService.update(model.dashboards);
	    };


        model.openSettings = function () {
	        //     templateUrl: '/app/dashboard/add-widget-modal.html', //js/common/gridLayout/widget-settings.html'
            var modalInstance = $uibModal.open({
                animation: true,
                // scope: model,
                templateUrl: '/app/dashboard/add-widget-modal.html',
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

	            console.log(job);

	        }, function () {

	        });
        };
    }

    module.component('widgetCell', {
        templateUrl: "/app/dashboard/widget-cell.component.html",
        controllerAs: 'model',
        controller: ['$uibModal', controller],

        bindings: {
            widget: '<'
        }
    });
})();
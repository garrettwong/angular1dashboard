app.controller('DashboardController', function ($scope, $timeout, JobService, $uibModal,
    Global, ColorService, DashboardService, UUIDService) {
    
    JobService.getJobs().then(function (res) {
        var data = res.data;
    });

    // new stuff
    $scope.openAddNewTile = function () {
        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: Global.host + 'js/dashboard/add-widget-modal.html',
            controller: 'WidgetModalInstanceCtrl',
            size: 'lg',
            resolve: {

            }
        });

        modalInstance.result.then(function (widgetDirectiveName) {
            console.log('Response from modalInstance', widgetDirectiveName);

            // we should set this in localStorage and add a new widget
            //$scope.addWidget(widgetDirectiveName);
        }, function () {

        });
    };

    // listen to broadcast from the modal window
    $scope.$on('widgetDirectiveNameReceived', function (eventName, widgetDirectiveName) {
        console.log(eventName, widgetDirectiveName);

        $scope.addWidget(widgetDirectiveName);
    });

    $scope.gridsterOptions = {
        margins: [20, 20],
        columns: 4,
        swapping: true,
        draggable: {
            handle: '.fa-arrows'
        }
    };

    $scope.dashboards = DashboardService.getDefaultDashboardData();

    setInterval(function () {
        $scope.$apply(function () {
            $scope.dashboards['1'].widgets[0].percent = ($scope.dashboards['1'].widgets[0].percent + 37) % 100;
            console.log($scope.dashboards['1'].widgets);
        });
    }, 999);

    $scope.clear = function () {
        $scope.dashboard.widgets = [];
    };

    $scope.addWidget = function (directiveName) {
        var newWidget = {
            sizeX: 1,
            sizeY: 1,
            id: UUIDService.create()
        };

        switch (directiveName) {
            /* Pie Charts  */
            case '<pie-chart-widget />':
                newWidget = angular.extend(newWidget, {
                    // Directive Extension: Pie Chart Widget
                    directiveName: '<pie-chart-widget />',

                    name: "Users",
                    faIcon: 'fa-user',
                    info: 127,
                    color: 'red',
                    percent: 33,

                    options: {
                        barColor: '#0044ff',
                        trackColor: '#f2f2f2',
                        scaleColor: false,
                        lineWidth: 7,
                        scaleLength: 0,
                        lineCap: 'circle'
                    }
                });
                break;

            case '<jobs-pie-chart />':
                newWidget = angular.extend(newWidget, {
                    // Directive Extension: Pie Chart Widget
                    directiveName: '<pie-chart-widget />',

                    name: "Active Jobs",
                    faIcon: 'fa-check-circle',
                    info: 118,
                    percent: 55,

                    options: {
                        barColor: '#229922',
                        trackColor: '#454545',
                        scaleColor: false,
                        lineWidth: 7,
                        scaleLength: 0,
                        lineCap: 'circle'
                    }
                });
                break;

            case '<busy-systems-pie-chart />':
                newWidget = angular.extend(newWidget, {
                    // Directive Extension: Pie Chart Widget
                    directiveName: '<pie-chart-widget />',

                    name: "Busy Systems",
                    faIcon: 'fa-television',
                    info: 118,
                    percent: 55,

                    options: {
                        barColor: '#7722cd',
                        trackColor: '#454545',
                        scaleColor: false,
                        lineWidth: 7,
                        scaleLength: 0,
                        lineCap: 'circle'
                    }
                });
                break;

            case '<users-pie-chart />':
                newWidget = angular.extend(newWidget, {
                    // Directive Extension: Pie Chart Widget
                    directiveName: '<pie-chart-widget />',

                    name: "Users",
                    faIcon: 'fa-user',
                    info: 61,
                    percent: 87,

                    options: {
                        barColor: '#389476',
                        trackColor: '#454545',
                        scaleColor: false,
                        lineWidth: 7,
                        scaleLength: 0,
                        lineCap: 'circle'
                    }
                });
                break;

            case '<active-job-chart />':
                newWidget = angular.extend(newWidget, {
                    directiveName: '<active-job-chart />',

                    name: "Job ID",
                    faIcon: 'fa-search',
                    info: 0,
                    percent: 1,

                    options: {
                        barColor: '#44cc44',
                        trackColor: '#454545',
                        scaleColor: false,
                        lineWidth: 7,
                        scaleLength: 0,
                        lineCap: 'circle'
                    }
                });
                break;

            /* Tables */
            case '<table-widget />':
                newWidget = angular.extend(newWidget, {
                    name: directiveName,
                    directiveName: directiveName,

                    // table specific
                    headers: ['First Name', 'Last Name', 'User Name'],
                    rows: [
                        ['Terry', 'Jacobs', 'jacobs_t'],
                        ['Kenny', 'Vincent', 'vincent_k'],
                        ['Chow', 'Pavarian', 'chow_p']
                    ]
                });
                break;

            /* Line/Bar Graphs */
            case '<bar-chart />':
                newWidget = angular.extend(newWidget, {
                    directiveName: directiveName
                });
                console.log(newWidget);
                break;
            default:
                newWidget = angular.extend(newWidget, {
                    name: directiveName,
                    directiveName: directiveName,

                    // graph specific
                    labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],

                    chartData: [
                        [65, 59, 80, 81, 56, 55, 40],
                        [28, 48, 40, 19, 86, 27, 90]
                    ],
                });
                break;
        }

        console.log(newWidget);

        $scope.dashboard.widgets.push(newWidget);

        DashboardService.update($scope.dashboards);
    };

    $scope.$watch('selectedDashboardId', function (newVal, oldVal) {
        if (newVal !== oldVal) {
            $scope.dashboard = $scope.dashboards[newVal];
        } else {
            $scope.dashboard = $scope.dashboards[1];
        }
    });

    // init dashboard
    $scope.selectedDashboardId = '1';
})
.controller('WidgetSettingsCtrl', ['$scope', '$timeout', '$rootScope', '$uibModalInstance', 'widget',
	function ($scope, $timeout, $rootScope, $uibModalInstance, widget) {
	    $scope.widget = widget;

	    $scope.form = {
	        name: widget.name,
	        sizeX: widget.sizeX,
	        sizeY: widget.sizeY,
	        col: widget.col,
	        row: widget.row
	    };

	    $scope.sizeOptions = [{
	        id: '1',
	        name: '1'
	    }, {
	        id: '2',
	        name: '2'
	    }, {
	        id: '3',
	        name: '3'
	    }, {
	        id: '4',
	        name: '4'
	    }];

	    $scope.dismiss = function () {
	        $uibModalInstance.dismiss();
	    };

	    $scope.remove = function () {
	        $scope.dashboard.widgets.splice($scope.dashboard.widgets.indexOf(widget), 1);

	        $uibModalInstance.close();
	    };

	    $scope.submit = function () {
	        angular.extend(widget, $scope.form);

	        $uibModalInstance.close(widget);
	    };
	}
])
.controller('CustomWidgetCtrl', ['$scope', 'Global', '$uibModal', 'DashboardService',
	function ($scope, Global, $uibModal, DashboardService) {

	    $scope.remove = function (widget) {
	        $scope.dashboard.widgets.splice($scope.dashboard.widgets.indexOf(widget), 1);

	        DashboardService.update($scope.dashboards);
	    };

	    $scope.openSettings = function (widget) {
	        var modalInstance = $uibModal.open({
	            animation: true,
	            scope: $scope,
	            templateUrl: Global.host + 'js/common/gridLayout/widget-settings.html',
	            controller: 'WidgetSettingsCtrl',
	            size: 'lg',
	            resolve: {
	                widget: function () {
	                    return widget;
	                }
	            }
	        });

	        modalInstance.result.then(function (job) {
	            $scope.selected = job;

	            console.log(job);

	        }, function () {

	        });
	    };

	}
])

// helper code
.filter('object2Array', function () {
    return function (input) {
        var out = [];
        for (i in input) {
            out.push(input[i]);
        }
        return out;
    }
});

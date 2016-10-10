(function () {
    'use strict';

    var module = angular.module('dashboard', [
        'gridster',
        'ui.bootstrap',
        //'ui.listSorter'
        'angularCSS',
        'Common',
        'chart.js',
        'easypiechart'
    ]);

    function controller($scope, $uibModal, UUIDService, DashboardService) {
        var model = this;

        model.widgets = DashboardService.getDefaultDashboardData() || [
            {
                "sizeX": 1,
                "sizeY": 1,
                "id": "1dabb5e7-c72d-42ac-84e2-79c51360f2c2",
                "name": "<pie-chart--widget />",
                "directiveName": "<pie-chart-widget />"
            }
        ];

        model.gridsterOptions = {
            margins: [20, 20],
            columns: 6,
            swapping: true,
            draggable: {
                handle: '.fa-arrows'
            }
        };

        model.openAddNewTile = function () {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: '/app/dashboard/add-widget-modal.html',
                controller: 'WidgetModalInstanceCtrl',
                size: 'lg',
                resolve: {

                }
            });
        };

        $scope.$on('widgetDirectiveNameReceived', function (eventName, widgetDirectiveName) {
            console.log(eventName, widgetDirectiveName);

            model.addWidget(widgetDirectiveName);
        });

        model.clear = function () {
            model.widgets = [];
        };

        // add widgets
        model.addWidget = function (directiveName) {
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
                case '<tree-table />':
                    newWidget = angular.extend(newWidget, {
                        name: directiveName,
                        directiveName: directiveName,

                        // table specific
                        headers: ['First Name', 'Last Name', 'User Name'],
                        rows: [
                            ['Jim', 'Halpert', 'halpert_j'],
                            ['Dwight', 'Schrute', 'schrute_d'],
                            ['Michael', 'Scott', 'scott_m'],
                            ['Pam', 'Beasley', 'beasley_p']
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

            model.widgets.push(newWidget);

            DashboardService.update(model.widgets);
        };
    }

    module.component('dashboard', {
        templateUrl: "/app/dashboard/dashboard.component.html",
        controllerAs: 'model',
        controller: ['$scope', '$uibModal', 'UUIDService', 'DashboardService', controller],
        css: '/app/dashboard/dashboard.css'
    });
})();
var module = angular.module('Common');

module.factory('DashboardService', function (UUIDService, Storage) {
    var dashboardService = {};

    var key = '_dashboard';

    dashboardService.getDefaultDashboardData = function () {
        var data = Storage.get(key);

        return data || [{
            col: 0,
            row: 0,
            sizeY: 1,
            sizeX: 1,

            id: UUIDService.create(),


            // Directive Extension: Pie Chart Widget
            directiveName: '<pie-chart-widget />',

            name: "Users",
            faIcon: 'fa-user',
            info: 1300,
            color: 'red',
            percent: 92,

            options: {
                barColor: '#2C3E50',
                trackColor: '#f2f2f2',
                scaleColor: false,
                lineWidth: 7,
                scaleLength: 0,
                lineCap: 'circle'
            }

        }, {
            col: 1,
            row: 1,
            sizeY: 1,
            sizeX: 1,

            id: UUIDService.create(),



            // Directive Extension: Pie Chart Widget
            directiveName: '<horizontal-line-chart />',

            name: "Horizontal Line",

            // graph
            labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],

            chartData: [
                [65, 59, 80, 81, 56, 55, 40],
                [28, 48, 40, 19, 86, 27, 90]
            ],
        }, {
            col: 2,
            row: 1,
            sizeY: 1,
            sizeX: 1,

            id: UUIDService.create(),


            name: "Line Graph",

            directiveName: '<line-graph-widget />',

            // graph
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            series: ['Series A', 'Series B'],
            data: [
                [65, 59, 80, 81, 56, 55, 40],
                [28, 48, 40, 19, 86, 27, 90]
            ],
            onClick: function (points, evt) {
                console.log(points, evt);
            },
            datasetOverride: [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }],
            options: {
                scales: {
                    yAxes: [
                        {
                            id: 'y-axis-1',
                            type: 'linear',
                            display: true,
                            position: 'left'
                        },
                        {
                            id: 'y-axis-2',
                            type: 'linear',
                            display: true,
                            position: 'right'
                        }
                    ]
                }
            }
        }, {
            col: 3,
            row: 1,
            sizeY: 1,
            sizeX: 1,

            id: UUIDService.create(),


            name: "Data Table Widget",
            directiveName: '<table-widget />',
            headers: ['First Name', 'Last Name', 'User Name'],
            rows: [
                ['Scott', 'Michaels', '16'],
                ['Schrute', 'Dwight', '-44']
            ]
        }];

    };

    // updates local storage
    dashboardService.update = function (dashboardData) {
        Storage.set(key, dashboardData);
    };

    return dashboardService;
});
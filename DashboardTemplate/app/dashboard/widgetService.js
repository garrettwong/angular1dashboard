(function () {
    var module = angular.module('Dashboard');

    // this factory is in charge of holding the hardcoded widget data
    // title, imageUrl, and description are metadata
    // widgetDirectiveName is the actual DOM element and must be backed by either a component
    // or a directive
    module.factory('WidgetService', function () {
        var widgetService = {};

        widgetService.getAvailableWidgets = function () {
            return [
                {
                    title: 'Tree Table',
                    imageUrl: 'http://www.dba.net/wp-content/uploads/2015/06/JOBS.jpg',
                    description: 'A watcher component for active jobs',
                    widgetDirectiveName: '<tree-table />'
                },
                {
                    title: 'Table',
                    imageUrl: 'http://www.igoogleportal.com/gadget/calendar/image.png',
                    description: 'Table',
                    widgetDirectiveName: '<table-widget />'
                },
                {
                    title: 'Bar Chart',
                    imageUrl: 'http://res.freestockphotos.biz/pictures/16/16026-illustration-of-a-3d-bar-chart-pv.png',
                    description: 'Google doesnt show icons well.',
                    widgetDirectiveName: '<bar-chart />',
                },
                {
                    title: 'Horizontal Line Chart',
                    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4cwhsSyxYYRLvw8xV4Nk0N0o0vQKC2Zl_Sf2p0QrNgSFyxm4gClXsgNs',
                    description: 'Google doesnt show icons well.',
                    widgetDirectiveName: '<horizontal-line-chart />',
                },
                {
                    title: 'Users',
                    imageUrl: 'http://www.we4its.com/images/system-integration.jpg',
                    description: 'User navigation',
                    widgetDirectiveName: '<users-pie-chart />'
                },
                {
                    title: 'Busy Systems',
                    imageUrl: 'http://www.businesshorsepower.com/wp-content/uploads/2015/08/Business-Systems1.jpg',
                    description: 'Display of busy systems',
                    widgetDirectiveName: '<busy-systems-pie-chart />'
                },
                {
                    title: 'Active Jobs',
                    imageUrl: 'http://www.dba.net/wp-content/uploads/2015/06/JOBS.jpg',
                    description: 'A pie chart showing active jobs',
                    widgetDirectiveName: '<jobs-pie-chart />'
                },
                {
                    title: 'Job Watcher',
                    imageUrl: 'http://www.dba.net/wp-content/uploads/2015/06/JOBS.jpg',
                    description: 'A watcher component for active jobs',
                    widgetDirectiveName: '<active-job-chart />'
                }
            ];
        };

        return widgetService;
    });
})();

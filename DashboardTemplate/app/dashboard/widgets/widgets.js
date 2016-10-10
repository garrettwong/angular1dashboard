var app = angular.module('dashboard');

// super table
app.directive('testWidget', function () {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,

        template: '<h1>Testing</h1>',

        link: function(scope, element, attrs) {
            console.log('testWidget', scope, element);

        }
    }
});

// pie charts
app.directive('pieChartWidget', function () {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,

        templateUrl: '/app/dashboard/widgets/templates/pie-chart-widget.html',

        link: function (scope, element) {
            console.log('pieChartWidget', scope, element, $);

            // increment user count on click
            var $userCount = 
            $(element[0]).find('.fs-36');
            
            $userCount.click(function () {
                var count = $(this).html();
                $(this).html(++count);
            });
        }
    };
});

app.directive('activeJobChart', function () {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,

        templateUrl: '/app/dashboard/widgets/templates/active-job-chart.html',

        link: function (scope, element) {
            console.log('pieChartWidget', scope, element, $);


            var intervalId = setInterval(function () {
                scope.directiveData.percent = (++scope.directiveData.percent);

                if (scope.directiveData.percent === 100) clearInterval(intervalId);
            }, 150);
           

            scope.update = function (jobId) {
                clearInterval(intervalId);

                scope.directiveData.percent = 1;

                intervalId = setInterval(function () {
                    scope.directiveData.percent = (++scope.directiveData.percent);

                    if (scope.directiveData.percent === 100) clearInterval(intervalId);
                }, 20);
            };
        }
    };
});





// data passed in through attributes
app.directive('bubbleChart', function () {
    return {
        restrict: 'E',
        replace: false,
        transclude: true,

        templateUrl: '/app/dashboard/widgets/templates/bubble-chart.html',

        link: function (scope, element) {
            console.log(scope);
        }
    };
});

// data passed in through attributes
app.directive('polarAreaChart', function () {
    return {
        restrict: 'E',
        replace: false,
        transclude: true,

        templateUrl: '/app/dashboard/widgets/templates/polar-area-chart.html',

        link: function (scope, element) {
            console.log(scope);
        }
    };
});

app.directive('lineGraphWidget', function () {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,

        templateUrl: '/app/dashboard/widgets/templates/line-graph-widget.html',

        link: function (scope) {
            console.log('lineGraphWidget', scope);
        }
    };
});

app.directive('tableWidget', function () {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,

        templateUrl: '/app/dashboard/widgets/templates/table-widget.html',

        link: function (scope) {
            
            console.log('dataTableWidget', scope);
        }
    };
});

// data passed in through attributes
app.directive('userPieChart', function () {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,

        template: '<div easypiechart options="directiveData.options" percent="directiveData.percent" style="position: relative;"><div class="chart-centered"><i class="fa fa-2x {{directiveData.faIcon}}"></i><div>{{directiveData.percent}}%</div></div></div>',

        link: function (scope, element) {
            console.log('pie chart', scope, element, $);


        }
    };
});

// data defined in controller
app.directive('systemsPieChart', function () {
    return {
        restrict: 'E',
        replace: false,
        transclude: true,
        template: '<div easypiechart options="options" percent="percent" style="position: relative;"><div class="chart-centered"><i class="fa fa-2x {{faIcon}}"></i><div>{{percent}}%</div></div></div>',

        controller: function ($scope) {
            $scope.name = "Widget 2";
            $scope.faIcon = 'fa-user';
            $scope.info = 476;
            $scope.color = 'silver';
            $scope.percent = 100;

            $scope.options = {
                barColor: '#222222',
                trackColor: '#f2f2f2',
                scaleColor: false,
                lineWidth: 7,
                scaleLength: 0,
                lineCap: 'circle'
            };
            console.log('syspiechart', $scope);
        },
        link: function (scope) {
            console.log('pie chart', scope);
        }
    };
});


app.directive('horizontalLineChart', function ($timeout) {
    return {
        restrict: 'E',
        replace: false,
        transclude: true,

        templateUrl: '/app/dashboard/widgets/templates/horizontal-line-graph-widget.html',

        link: function (scope, element, attrs) {
            console.log('horizontal line chart', scope, element, attrs);
        }
    }
});

app.directive('barChart', function ($timeout) {
    return {
        restrict: 'E',
        replace: false,
        transclude: true,

        templateUrl: '/app/dashboard/widgets/templates/bar-chart.html',

        controller: ['$scope', function($scope) {
            $scope.name = 'GG';
        }],
        link: function (scope, element, attrs) {
            console.log('horizontal line chart', scope, element, attrs);

            // get data
            scope.labels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
            scope.series = ['Series A', 'Series B'];

            scope.data = [
              [65, 59, 80, 81, 56, 55, 40],
              [28, 48, 40, 19, 86, 27, 90]
            ];

        }
    }
});


app.directive('searchTable', function ($compile) {
    /* 
        example scope:
        {
            name: "Search Table",
            directiveName: '<search-table />',
            headers: ['First Name', 'Last Name', 'User Name'],
            rows: [
                ['Thomas', 'Jones', 'jones_t'],
                ['Craig', 'Scott', 'scott_c'],
                ['Lee', 'Sung', 'sung_l']
            ]
        }     
    */
    return {
        restrict: 'E',
        replace: true,
        transclude: true,

        templateUrl: '/app/dashboard/widgets/templates/search-table.html',

        controller: function($scope) {
            $scope.isNumber = function (n) {
                return !isNaN(parseFloat(n)) && isFinite(n);
            }
        },
        link: function (scope) {

            scope.update = function (searchTerm) {
                console.log('searchTable scope', $compile, scope);

                scope.directiveData.rows[0][1] = searchTerm;
            };

            console.log('searchTable scope done', $compile, scope);

            //angular.element(element[0].querySelector('pie-chart')).html($compile(scope.directiveName)(scope));
            this.loop(scope);
        },
        loop: function (scope) {
            this.intervalId = setInterval(function () {
                scope.directiveData.percent = (++scope.directiveData.percent);

                if (scope.directiveData.percent === 100) clearInterval(intervalId);
            }, 150);
            
            console.log(scope.directiveData);
        }
    };
});
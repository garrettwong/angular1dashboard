var app = angular.module('dashboard');


app.directive('treeTable', function (UUIDService) {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,

        templateUrl: '/app/dashboard/widgets/templates/tree-table.html',

        controllerAs: 'model',
        controller: function() {

            var model = this;
            
            model.title = 'GOOGOGOGO';

            model.isNumber = function (n) {
                return !isNaN(parseFloat(n)) && isFinite(n);
            }

            model.title += UUIDService.create();


            
        },
        link: function (scope, element, attrs) {

            scope.update = function (searchTerm) {
                console.log('searchTable scope', $compile, scope);

                scope.directiveData.rows[0][1] = searchTerm;
            };

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
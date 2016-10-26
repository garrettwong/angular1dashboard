(function () {

    var module = angular.module('Dashboard');

    module.controller('WidgetModalInstanceCtrl', function ($scope, $uibModalInstance, $rootScope, WidgetService) {

        console.log($uibModalInstance);

        $scope.widgets = WidgetService.getAvailableWidgets();

        $scope.addWidget = function (widgetDirectiveName) {
            console.log(widgetDirectiveName);

            $rootScope.$broadcast('widgetDirectiveNameReceived', widgetDirectiveName);
        };

        $scope.ok = function () {
            $uibModalInstance.close($scope.selected.item);
        };

        $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
    });

})();
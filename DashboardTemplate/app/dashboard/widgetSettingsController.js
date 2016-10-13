(function () {
    'use strict';

    var module = angular.module('dashboard');

    // this acts a modal helper class for editing current widget cell settings
    module.controller('WidgetSettingsCtrl', ['$scope', '$timeout', '$rootScope', '$uibModalInstance',
        'widget', function ($scope, $timeout, $rootScope, $uibModalInstance, widget) {
            // we may not need $scope here because we aren't using any $scope specific functions 
            $scope.widget = widget;

            console.log('widget', $scope.widget);

            // form that references a CELL's: name, width, height, column and row.  
            $scope.form = {
                name: widget.name,
                sizeX: widget.sizeX,
                sizeY: widget.sizeY,
                col: widget.col,
                row: widget.row
            };

            // declares the different size options
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

            // dismiss modal
            $scope.dismiss = function () {
                alert('wait');
                $uibModalInstance.dismiss();
            };
            
            // extend widget and replace property values with new form values
            $scope.submit = function () {
                alert('sub');

                // extend widget with the form
                angular.extend(widget, $scope.form);

                $uibModalInstance.close(widget);
            };
        }
    ]);

})();
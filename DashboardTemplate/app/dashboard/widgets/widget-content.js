var app = angular.module('dashboard');

app.directive('widgetContent', function ($timeout, $compile, $parse) {
    return {
        scope: {
            directiveName: '=',
            directiveData: '='
        },

        template: '<div class="fill-me-in"></div>',

        link: function (scope, element, attrs, tabsCtrl) {
            // if directiveName exists (<directive />), replace scope.content with the directive content
            if (scope.directiveName) {

                console.log('this scope', scope);
                
                var html = $compile(scope.directiveName)(scope);

                angular.element(element[0].querySelector('.fill-me-in')).append(html);
            }
        },
    }
});




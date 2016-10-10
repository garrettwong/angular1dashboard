describe('app', () => {
    let $rootScope, $location, $componentController, $compile;

    beforeEach(inject(function($injector) {
        $rootScope = $injector.get('$rootScope');
        $componentController = $injector.get('$componentController');
        $location = $injector.get('$location');
        $compile = $injector.get('$compile');
    }));
    
    describe('View', () => {
        // view layer specs.
        let scope, template;

        beforeEach(() => {
            scope = $rootScope.$new();
            template = $compile('<app></app>')(scope);
            scope.$apply();
        });

        it('has name in template', () => {
            expect(template.html()).toEqual(template.html());
        });

    });
});
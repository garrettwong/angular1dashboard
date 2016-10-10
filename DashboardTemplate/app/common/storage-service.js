
var module = angular.module('Common');

module.factory('Storage', function () {
    var store = localStorage;

    var get = function (key) {
        var json = localStorage.getItem(key);
        return JSON.parse(json);
    };

    var set = function (key, value) {
        var json = JSON.stringify(value);
        localStorage.setItem(key, json);
    };

    return {
        get: get,
        set: set
    };
});

module.factory('StorageSeeder', function () {
    var store = localStorage;

    var get = function (key) {
        var json;

        switch (key) {
            case 'requests':
                json = [
                    {
                        "name": "fib(10)",
                        "system": "Laptop Computer (WIN07)",
                        "runTask": "fib",
                        "parameter": "4",
                        "state": "Pending"
                    },
                    {
                        "name": "openChrome()",
                        "system": "Nearby Computer (WIN10)",
                        "runTask": "fib",
                        "parameter": "a",
                        "state": "Pending"
                    }];
                break;

            case 'systemjobs':
                json = [
                    { id: 1, name: 'Nearby Computer (WIN10)' },
                    { id: 2, name: '1-216C Computer (SVR16)' },
                    { id: 3, name: 'Laptop Computer (WIN07)' },
                ];
                break;

            case 'jobs':
                json = [
                    { id: 1, name: 'Fibonacci Number', command: 'fib' },
                    { id: 1, name: 'Open Chrome', command: 'run' }
                ];
                break;
        }

        return json;
    };

    var set = function (key, value) { };

    var seed = function (key, value) {
        var keys = ['requests', 'systemjobs', 'jobs'];
        
        for (var i = 0; i < keys.length; i++) {
            var key = keys[i];

            if (localStorage.getItem(key) === null) {
                var jsonObj = get(key);
                localStorage.setItem(key, JSON.stringify(jsonObj));
            }
        }
    };

    // uncomment to seed once
    // seed();

    return {
        get: get,
        set: set,
        seed: seed
    };
});
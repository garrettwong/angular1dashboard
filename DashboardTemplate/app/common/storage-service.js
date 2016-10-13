// module: 'Common'
var module = angular.module('Common');

// service wrapper for HTML5 local storage
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
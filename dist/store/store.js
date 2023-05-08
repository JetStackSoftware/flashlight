"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStore = void 0;
var createStore = function (initialValue) {
    var value = initialValue;
    var subscriptions = [];
    var notify = function () {
        if (subscriptions.length > 0)
            for (var _i = 0, subscriptions_1 = subscriptions; _i < subscriptions_1.length; _i++) {
                var i = subscriptions_1[_i];
                i(value);
            }
    };
    var store = {
        get: function () {
            return value;
        },
        set: function (newValue) {
            value = newValue;
            notify();
        },
        subscribe: function (callback) {
            var idx = subscriptions.length;
            subscriptions.push(callback);
            return function () {
                subscriptions.splice(idx, 1);
            };
        }
    };
    return store;
};
exports.createStore = createStore;

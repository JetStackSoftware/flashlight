"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAsyncStore = void 0;
var createAsyncStore = function (initialValue) {
    var value = initialValue;
    var subscribers = [];
    var notifications = [];
    var notify = function () {
        notifications.push(value);
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
            var idx = subscribers.length;
            subscribers.push(callback);
            return function () {
                subscribers.splice(idx, 1);
            };
        },
        complete: function () {
            if (subscribers.length > 0)
                for (var _i = 0, subscribers_1 = subscribers; _i < subscribers_1.length; _i++) {
                    var i = subscribers_1[_i];
                    i(notifications);
                }
            notifications.length = 0;
            subscribers.length = 0;
        }
    };
    return store;
};
exports.createAsyncStore = createAsyncStore;

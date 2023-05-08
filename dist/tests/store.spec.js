"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vitest_1 = require("vitest");
var src_1 = require("../src");
(0, vitest_1.describe)('Store', function () {
    var store = (0, src_1.createStore)(0);
    (0, vitest_1.it)('Get and set work properly', function () {
        (0, vitest_1.expect)(store.get()).toBe(0);
        store.set(10);
        (0, vitest_1.expect)(store.get()).toBe(10);
    });
    (0, vitest_1.it)('Subscribe works properly', function () {
        var unsub = store.subscribe(function (val) {
            (0, vitest_1.expect)(val).toBe(5);
        });
        store.set(5);
        unsub();
    });
});
